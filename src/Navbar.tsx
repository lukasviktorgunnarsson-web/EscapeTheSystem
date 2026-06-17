import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full h-16 fixed top-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md border-b border-green-500/10">
            
            <div className="flex space-x-6 font-mono text-sm tracking-widest">

                <NavLink
                    to="/room/server-room"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    SERVER
                </NavLink>

                <NavLink
                    to="/room/security-room"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    SECURITY
                </NavLink>

                <NavLink
                    to="/room/archives"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    ARCHIVES
                </NavLink>

                <NavLink
                    to="/room/reactor-room"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    REACTOR
                </NavLink>

                <NavLink
                    to="/room/vault"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    VAULT
                </NavLink>

                <NavLink
                    to="/room/exit-node"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "text-gray-400 hover:text-green-300 transition-all"
                    }
                >
                    EXIT
                </NavLink>

            </div>
        </nav>
    );
};

export default Navbar;