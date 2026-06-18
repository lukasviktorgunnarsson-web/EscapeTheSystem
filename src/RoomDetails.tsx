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
    const isLastRoom = String(roomsData[roomsData.length - 1]?.id) === String(room.id);

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
            {isLastRoom && isSolved && (
                <button
                    onClick={() => navigate("/endgame")} // Ändra "/endgame" till din exakta path
                    className="
                                px-6 py-4
                                bg-red-600/80
                                hover:bg-red-600
                                border border-red-500
                                text-white
                                font-mono text-sm font-bold
                                rounded-md
                                tracking-widest
                                shadow-[0_0_20px_rgba(220,38,38,0.3)]
                                hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
                                transition-all duration-300
                                active:scale-95
                                animate-pulse
                                md:w-auto w-full
                            "
                >
                    LEAVE
                </button>
            )}

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