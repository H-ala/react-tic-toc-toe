export default function ({ winner }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
