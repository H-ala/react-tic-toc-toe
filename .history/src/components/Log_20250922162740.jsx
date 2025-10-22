export default function Log({turns}) {
    return (
        <ol id="log">
            {turns.map(turn => <li>
                {turn.player} selected row {turn.square.row} and col {turn.square.col}
            </li>)}
        </ol>
    )
}