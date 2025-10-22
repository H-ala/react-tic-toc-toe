import { farsiNum } from "../util/formatting.js";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} ردیف {farsiNum(turn.square.row + 1)} و ستون {farsiNum(turn.square.col + 1)} را انتخاب کرد  
        </li>
      ))}
    </ol>
  );
}
