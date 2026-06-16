import itemsData from "./data/items.json";
import { useContext } from "react";
import UserContext from "./UserContext";

function Inventory() {
  const context = useContext(UserContext);

  if (!context) return null;

  const { inventory } = context;
  console.log(inventory);

  return (
    <div>
      <h2>Inventory</h2>

      {inventory.length === 0 ? (
        <p>Inga items ännu</p>
      ) : (
        inventory.map((id: number) => {
          const item = itemsData.find(i => i.id === id);

          return (
            <p key={id}>
              {item?.item}
            </p>
            
          );
        })
      )}
    </div>
  );
}

export default Inventory;