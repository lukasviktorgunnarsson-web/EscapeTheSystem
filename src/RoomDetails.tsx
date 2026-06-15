import { useParams } from "react-router-dom";
import { useContext } from "react";
import roomsData from "./data/rooms.json";
import UserContext from "./UserContext";

const RoomDetails = () => {
  const { inventory, setInventory } = useContext(UserContext);

  const { roomPath } = useParams();

  const room = roomsData.find((r) => r.roomPath === roomPath);

  if (!room) {
    return <div>Rummet hittades inte</div>;
  }

  const isSolved = false;

  const handlePickup = () => {
    setInventory([...inventory, "Nyckel"]);
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

      <button onClick={handlePickup}>
        Plocka upp item
      </button>
    </div>
  );
};

export default RoomDetails;