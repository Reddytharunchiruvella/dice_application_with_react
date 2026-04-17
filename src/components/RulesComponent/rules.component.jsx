import "./rules.styles.css";

export const RulesBtn = ({ ruleclose }) => {
  return (
    <>
      <div className="rulesbutton">
        <h1>Rules Of The Game!!!</h1>
        <ul id="ul">
          <li>Enter the player names before the game start.</li>
          <li>One player has only one chance to roll the dice.</li>
          <li>
            Active player gets the second chance to roll the dice, if the 
            dice score is equal to six.
          </li>
        </ul>
        <button className="ruleok" onClick={ruleclose}>
          Okay...
        </button>
      </div>
    </>
  );
};
