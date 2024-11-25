export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list !</p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <>
          "You got everything ! Ready to go"{" "}
          <img src="travel-bag.png" alt="Icon"></img>
        </>
      ) : (
        `You have ${numItems} Items on your list, and you already packed ${numPacked} (${percentage} %)`
      )}
    </footer>
  );
}
