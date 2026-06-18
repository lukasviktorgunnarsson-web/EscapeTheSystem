import { useParams } from "react-router-dom";
import { useContext } from "react";
import roomsData from "./data/rooms.json";
import itemsData from "./data/items.json";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const RoomDetails = () => {
    const navigate = useNavigate();
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("UserContext is missing Provider");
    }

    const {
    inventory,
    setInventory,
    solvedRooms,
    setSolvedRooms,
      } = context;

  const { roomPath } = useParams();

  const room = roomsData.find((r) => r.roomPath === roomPath);

  if (!room) return <div>Rummet hittades inte</div>;

  const isSolved = solvedRooms.includes(room.id);

  const handleUseItem = (itemId: number) => {
    if (isSolved) return;

    if (itemId === room.itemToSolve) {
      setSolvedRooms([...solvedRooms, room.id]);

      if (room.itemToAdd !== null && room.itemToAdd !== undefined) {
        setInventory([...inventory, room.itemToAdd]);
      }
    }
  };

  return (
    <div>
      <p>
        {isSolved
          ? room.solvedInstruction
          : room.unsolvedInstruction}
      </p>

      <img
        src={isSolved ? room.solvedImage : room.unsolvedImage}
        alt={room.roomName}
      />

      <div>
        <h3>Inventory</h3>

        {inventory.map((id: number) => {
          const item = itemsData.find((i: { id: number }) => i.id === id);

          return (
            <button
              key={id}
              onClick={() => handleUseItem(id)}
            >
              {item?.item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoomDetails;