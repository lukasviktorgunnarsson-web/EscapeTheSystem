

export interface Room {
  id: number;
  roomName: string;
  roomPath: string;
  unsolvedInstruction: string;
  solvedInstruction: string;
  hint: string;
  unsolvedImage: string;
  solvedImage: string;
  itemToSolve: number;
  itemToAdd: number;
}
