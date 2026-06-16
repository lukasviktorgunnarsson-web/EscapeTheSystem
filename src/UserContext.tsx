import { createContext } from "react";

type UserContextType = {
  inventory: number[];
  setInventory: React.Dispatch<React.SetStateAction<number[]>>;

  solvedRooms: number[];
  setSolvedRooms: React.Dispatch<React.SetStateAction<number[]>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;