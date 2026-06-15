import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import RoomDetails from "./RoomDetails";
import Inventory from "./Inventory";
import UserContext from "./UserContext";

const App = () => {
  const [inventory, setInventory] = useState([]);

  return (
    <UserContext.Provider value={{ inventory, setInventory }}>
      <BrowserRouter>
        <Navbar />

        {/* Visas alltid */}
        <Inventory />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomPath" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;