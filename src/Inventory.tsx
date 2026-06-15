import { useContext } from "react";
import UserContext from "./UserContext";

function Inventory() {
  const { inventory } = useContext(UserContext);

  return (
    <div>
      <h2>Inventory</h2>

      {inventory.length === 0 ? (
        <p>Inga föremål ännu.</p>
      ) : (
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Inventory;