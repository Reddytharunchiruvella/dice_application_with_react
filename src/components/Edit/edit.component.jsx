import "./edit.styles.css";

export const EditBtn = ({editclose}) => {
  return (
    <>
      <div className="editbutton">
        <h1>Edit Player Names!!!</h1>
        <p id="editP">Fill the Required Names...?</p>
        <input
          className="inputEdit"
          id="input1"
          type="text"
          placeholder="Player1"
        />
        <br />
        <input
          className="inputEdit"
          id="input2"
          type="text"
          placeholder="Player2"
        />
        <br />
        <button className="EditOk" onClick={editclose}>OK...</button>
      </div>
    </>
  );
};
