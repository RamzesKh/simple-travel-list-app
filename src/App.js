import { useState } from "react";
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far Away </h1>;
}

function Form() {
  const [description, setDesription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
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

function PackingList() {
  return <div className="list"> LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X Items on your list, and you already packed X </em>
    </footer>
  );
}
