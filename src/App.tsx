import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import RoomDetails from "./RoomDetails";
import UserContext from "./UserContext";
import EndGamepage from "./EndGamepage";

const App = () => {
  const [inventory, setInventory] = useState([1]);

  const [solvedRooms, setSolvedRooms] = useState<number[]>([]);

  return (
    <UserContext.Provider
      value={{
        inventory,
        setInventory,
        solvedRooms,
        setSolvedRooms,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomPath" element={<RoomDetails />} />
          <Route path="/endgame" element={<EndGamepage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;