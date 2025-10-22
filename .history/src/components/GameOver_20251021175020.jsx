export default function ({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1>بازی تمام شد!</h1>
      {winner && <p>{winner} برنده شد!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>دوباره!</button>
      </p>
    </div>
  );
}
