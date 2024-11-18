import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDesription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) {
      return;
    }
    const item = {
      quantity: quantity,
      description: description,
      id: Math.random(),
      packed: false,
    };
    onAddItems(item);
    setDesription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip ? </h3>
      <select onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDesription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
