import "./edit.styles.css";

export const EditBtn = ({
  editclose,
  player1Name,
  player2Name,
  showwarning,
}) => {
  return (
    <>
      <div className="editbutton">
        <h1 id="edit-text">Edit Player Names!!!</h1>
        <p id="editP">{showwarning}</p>
        <input
          className="inputEdit"
          id="input1"
          type="text"
          placeholder="Player1"
          onChange={player1Name}
        />
        <br />
        <input
          className="inputEdit"
          id="input2"
          type="text"
          placeholder="Player2"
          onChange={player2Name}
        />
        <br />
        <button className="EditOk" onClick={editclose}>
          OK...
        </button>
      </div>
    </>
  );
};
