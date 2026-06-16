import React, { useState } from 'react';
import type { Item, Room } from './Interface.ts';

// Mock-data baserat på dina bilder (importera från dina JSON-filer i verkligheten)
const itemsList: Item[] = [
  { id: 1, item: "UV Light", description: "A portable ultraviolet flashlight...", image: "/images/items/uv-light.png" },
  { id: 2, item: "Access Code", description: "A hidden code...", image: "/images/items/access-code.png" }
];

const roomsList: Room[] = [
  {
    id: 1,
    roomName: "Server Room",
    roomPath: "server-room",
    unsolvedInstruction: "A note labelled 'ACCESS CODE' is attached to a server rack...",
    solvedInstruction: "Using the UV Light, you revealed a hidden access code...",
    hint: "Not everything can be seen with the naked eye.",
    unsolvedImage: "/images/rooms/server-room-unsolved.png",
    solvedImage: "/images/rooms/server-room-solved.png",
    itemToSolve: 1, // Kräver UV Light
    itemToAdd: 2   // Ger Access Code
  }
];

export const Inventory: React.FC = () => {
  // Spelarens inventory – vi börjar med UV-lampan (id: 1) för att kunna lösa rummet
  const [inventory, setInventory] = useState<Item[]>([itemsList[0]]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  // Håller koll på vilket rum spelaren är i (index eller id)
  const [currentRoom, setCurrentRoom] = useState<Room>(roomsList[0]);

  const [currentRoomIndex, setCurrentRoomIndex] = useState<number>(0);
  
  // Håller koll på om det NUVALDA rummet är löst
  const [roomIsSolved, setRoomIsSolved] = useState<boolean>(false);

  // Körs när man klickar på rummets bild
  const handleInteractWithRoom = () => {
    if (roomIsSolved) return;

    // 1. Kolla om spelaren har valt rätt föremål för detta rum
    if (selectedItemId === currentRoom.itemToSolve) {
      
      // Rummet är nu löst!
      setRoomIsSolved(true);

      // 2. Hitta hela objektet för föremålet som ska läggas till
      const rewardItem = itemsList.find(item => item.id === currentRoom.itemToAdd);
      
      if (rewardItem) {
        // Lägg till det nya föremålet i ryggsäcken
        setInventory(prev => [...prev, rewardItem]);
      }
      
      // Nollställ markeringen
      setSelectedItemId(null);
    } else {
      alert("Inget händer. Det verkar krävas ett annat föremål här.");
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{currentRoom.roomName}</h1>
      
      {/* RUMS-PANEL */}
      <div 
        onClick={handleInteractWithRoom} 
        style={{ border: '2px solid #333', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', marginBottom: '20px' }}
      >
        {/* Visa unsolvedImage eller solvedImage beroende på om det är löst */}
        <img 
          src={roomIsSolved ? currentRoom.solvedImage : currentRoom.unsolvedImage} 
          alt={currentRoom.roomName} 
          style={{ width: '100%', display: 'block' }}
        />
        
        <div style={{ padding: '15px', background: '#f5f5f5' }}>
          <p>
            <strong>Status:</strong> {roomIsSolved ? currentRoom.solvedInstruction : currentRoom.unsolvedInstruction}
          </p>
          {!roomIsSolved && <p style={{ color: 'gray', fontSize: '0.9rem' }}><em>Ledtråd: {currentRoom.hint}</em></p>}
        </div>
      </div>

      {/* INVENTORY-PANEL */}
      <h3>Ditt Inventory</h3>
      <div style={{ display: 'flex', gap: '15px' }}>
        {inventory.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedItemId(item.id)}
            style={{
              border: selectedItemId === item.id ? '3px solid #4CAF50' : '1px solid #ccc',
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              background: selectedItemId === item.id ? '#e8f5e9' : '#fff',
              textAlign: 'center',
              width: '100px'
            }}
          >
            <img src={item.image} alt={item.item} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>{item.item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;