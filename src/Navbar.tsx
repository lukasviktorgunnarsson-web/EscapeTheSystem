import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
            <div className="flex space-x-4">
                <NavLink to="/room/server-room" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Server Room</NavLink>
                <NavLink to="/room/security-room" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Security Room</NavLink>
                <NavLink to="/room/archives" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Archives</NavLink>
                <NavLink to="/room/reactor-room" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Reactor Room</NavLink>
                <NavLink to="/room/vault" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Vault</NavLink>
                <NavLink to="/room/exit-node" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-green-400"}>Exit Node</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar