import type { Room } from "./Interface";
import { useParams } from "react-router-dom";
import roomsData from "./data/rooms.json";

const RoomDetails = () => {
  // const roomsList: Room[] = roomsData as Room[];[
  //   {
  //     "id": 1,
  //     roomName: "Server Room",
  //     roomPath: "server-room",
      

  //   }
  // ]




  const { roomPath } = useParams<{ roomPath: string }>();
  const rooms = roomsData as Room[];

  const room = rooms.find(r => r.roomPath === roomPath);

  if (!room) {
    return <div>Rummet hittades inte</div>;
  }
  const isSolved = false;


  return (
    <div>
      <p>{isSolved ? room.solvedInstruction : room.unsolvedInstruction}</p>
      <img src={isSolved ? room.solvedImage : room.unsolvedImage} alt={room.roomName} className="w-120 h-120 object-cover" />

    </div>
  )
}

export default RoomDetails