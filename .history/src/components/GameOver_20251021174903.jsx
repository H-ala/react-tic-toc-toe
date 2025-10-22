export default function ({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>دوباره!</button>
      </p>
    </div>
  );
}
