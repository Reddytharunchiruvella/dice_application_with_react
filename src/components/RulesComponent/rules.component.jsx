import "./rules.styles.css";

export const RulesBtn = ({ ruleclose }) => {
  return (
    <>
      <div className="rulesbutton">
        <h1>Rules Of The Game!!!</h1>
        <ul id="ul">
          <li>The game has 2 players,playing in rounds.</li>
          <li>In each turn,a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.</li>
          <li>BUT, if the player rolls a 1, all from his Round score gets lost.After that, it's the next player's turn.</li>
          <li>The player can choose to "HOLD", which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.</li>
          <li>The first player to reach 50 points GLOBAL score wins the game.</li>
          <li>you can change the predefined score of 50 in the "Set Target Score" input box "GOOD LUCK BUDDY !!!"</li>
        </ul>
        <button className="ruleok" onClick={ruleclose}>
          Get Started!
        </button>
      </div>
    </>
  );
};
