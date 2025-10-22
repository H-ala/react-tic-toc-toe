export default function ({ winner }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      <p>{winner} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
