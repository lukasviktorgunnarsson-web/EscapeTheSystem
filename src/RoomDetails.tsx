import { useParams } from "react-router-dom";
import { useContext } from "react";
import roomsData from "./data/rooms.json";
import itemsData from "./data/items.json";
import UserContext from "./UserContext";

const RoomDetails = () => {
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

    if (!room)
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-gray-400 bg-black">
                ROOM NOT FOUND
            </div>
        );

    const isSolved = solvedRooms.includes(room.id);

    const handleUseItem = (itemId) => {
        if (isSolved) return;

        if (itemId === room.itemToSolve) {
            setSolvedRooms([...solvedRooms, room.id]);

            if (room.itemToAdd !== null && room.itemToAdd !== undefined) {
                setInventory([...inventory, room.itemToAdd]);
            }
        }
    };

    return (
        <div
            className="w-full min-h-screen flex flex-col items-center justify-center gap-8 p-6 text-white bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bg-all-rooms.png')" }}
        >
           
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl text-center">

                {/* ROOM TEXT */}
                <p className="font-mono text-sm md:text-base text-gray-200 leading-relaxed tracking-wide">
                    {isSolved
                        ? room.solvedInstruction
                        : room.unsolvedInstruction}
                </p>

                {/* ROOM IMAGE */}
                <div className="relative">
                    <img
                        src={isSolved ? room.solvedImage : room.unsolvedImage}
                        alt={room.roomName}
                        className="
                            max-w-full md:max-w-lg
                            rounded-md
                            border border-green-500/20
                            shadow-[0_0_30px_rgba(0,255,120,0.08)]
                        "
                    />
                </div>

                {/* INVENTORY TITLE */}
                <h3 className="font-mono tracking-[0.3em] text-gray-400 text-xs">
                    INVENTORY ACCESS
                </h3>

                {/* INVENTORY */}
                <div className="flex flex-wrap justify-center gap-3">
                    {inventory.map((id) => {
                        const item = itemsData.find((i) => i.id === id);

                        return (
                            <button
                                key={id}
                                onClick={() => handleUseItem(id)}
                                className="
                                    px-4 py-2
                                    bg-black/60
                                    border border-green-500/40
                                    text-green-300
                                    font-mono text-sm
                                    rounded-md
                                    tracking-wide
                                    transition-all duration-300
                                    hover:bg-green-500
                                    hover:text-black
                                    hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]
                                    active:scale-95
                                "
                            >
                                {item?.item}
                            </button>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;