import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from ".//HomePage";
import Navbar from "./Navbar";
import RoomDetails from "./RoomDetails";

const App = () => {
  return <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomPath" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
