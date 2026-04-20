import "./rules.styles.css";

export const RulesBtn = ({ ruleclose }) => {
  return (
    <>
      <div className="rulesbutton">
        <h1>Rules Of The Game!!!</h1>
        <ul id="ul">
          <li>Enter the player names before the game start.</li>
          <li>When you click on the start game, we provided some options to play the game.</li>
          <li>When player roll the dice as "1", then his current score become "0" and the oppoent get's the chance to play.</li>
        </ul>
        <button className="ruleok" onClick={ruleclose}>
          Okay...
        </button>
      </div>
    </>
  );
};
