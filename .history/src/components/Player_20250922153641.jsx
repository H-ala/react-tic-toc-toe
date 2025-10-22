import { useState } from "react";

export default function ({ initialName, symbol }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  function handleEditClick() {
    setIsEditting((editting) => !editting);
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  let edittablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditting) {
    edittablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edittablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
