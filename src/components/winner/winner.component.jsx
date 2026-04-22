import "./winner.styles.css";

export const Winner = ({ Score, Name, closeBtn }) => {
  return (
    <>
      <div className="winnerContainer">
        <h1>Congratulations Buddy !!!</h1>
        <h2>{Name} won the game</h2>
        <h2 id="score">Winner Score :{Score}</h2>
        <button className="winnerWonBtn" onClick={closeBtn}>
          Thanks Buddy...
        </button>
      </div>
    </>
  );
};
