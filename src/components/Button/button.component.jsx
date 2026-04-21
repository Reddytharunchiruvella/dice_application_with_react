import "./button.styles.css";

export const PrimaryBtn = ({
  BtnName,
  icon,
  clickEditBtn,
  clickNormalModeBtn,
}) => {
  return (
    <>
      <div className="Primary">
        <button
          className="primary_button"
          onClick={clickEditBtn || clickNormalModeBtn}
        >
          {icon}
          {BtnName}
        </button>
      </div>
    </>
  );
};

export const SecondaryBtn = ({
  BtnName,
  icon,
  clickRuleBtn,
  clickHardModeBtn,
}) => {
  return (
    <>
      <div className="Secondary">
        <button
          className="Secondary_button"
          onClick={clickRuleBtn || clickHardModeBtn}
        >
          {icon} {BtnName}
        </button>
      </div>
    </>
  );
};

export const TransparentBtn = ({
  BtnName,
  rollDiceFunc,
  holdDiceFunc,
  newgame,
  startgame,
  icon,
}) => {
  return (
    <>
      <div className="Transparent">
        <button
          className="Transparent_button"
          onClick={rollDiceFunc || holdDiceFunc || newgame || startgame}
        >
          {icon}
          {BtnName}
        </button>
      </div>
    </>
  );
};
