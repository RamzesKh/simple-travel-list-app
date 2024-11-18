export function Item({ item, onDeleteItems, onToggleItem }) {
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
