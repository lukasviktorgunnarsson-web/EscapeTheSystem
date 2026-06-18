import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center justify-center gap-8 p-6 text-white bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bg-start.png')" }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />

            {/* content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center max-w-2xl">

                {/* Title */}
                <h1 className="font-wallpoet text-5xl md:text-6xl tracking-[0.3em] text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]">
                    Project NEXUS
                </h1>

                {/* Intro block */}
                <div className="space-y-5 text-gray-200 leading-relaxed font-mono text-sm md:text-base">

                    <p className="italic text-gray-300">
                        The screen flickers. Silence follows—heavy, unnatural, as if the system is watching you.
                    </p>

                    <p className="text-gray-100">
                        <strong className="tracking-widest">ENTRY AUTHORIZED… USER UNKNOWN</strong>
                    </p>

                    <p className="text-gray-200">
                        You have found yourself trapped within a labyrinthine system where every escape demands the solving of a puzzle.
                        The system is divided into <strong className="text-white">rooms</strong>, each containing challenges that require logic, memory, or instinct.
                    </p>

                    <p className="text-gray-200">
                        Every solved puzzle grants an item. Every item unlocks the next door.
                        A chain of dependencies—leading only deeper… or out.
                    </p>

                    <p className="italic text-gray-400">
                        Ahead lies a single unmarked door. Whatever is inside is already aware of you.
                    </p>
                </div>

                {/* Command */}
                <p className="text-xs tracking-[0.35em] text-gray-400 font-mono">
                    COMMAND: INITIALIZE SEQUENCE
                </p>

                {/* Button */}
                <Link to="/room/server-room">
                    <button className="
                        px-8 py-3
                        bg-black/60
                        border border-green-400
                        text-green-300
                        rounded-md
                        tracking-[0.3em]
                        font-mono
                        transition-all duration-300
                        hover:bg-green-500
                        hover:text-black
                        hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
                        active:scale-95
                    ">
                        ENTER THE NEXUS
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default HomePage;