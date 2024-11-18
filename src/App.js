import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItems}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far Away </h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItems, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItems(item.id)}
        style={{ color: "red", fontSize: "40px" }}
      >
        &times;
      </button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X Items on your list, and you already packed X </em>
    </footer>
  );
}
