import "./button.styles.css";

export const PrimaryBtn = ({ BtnName, icon, clickEditBtn }) => {
  return (
    <>
      <div className="Primary">
        <button className="primary_button" onClick={clickEditBtn}>
          {icon}
          {BtnName}
        </button>
      </div>
    </>
  );
};

export const SecondaryBtn = ({ BtnName, icon, clickRuleBtn }) => {
  return (
    <>
      <div className="Secondary">
        <button className="Secondary_button" onClick={clickRuleBtn}>
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
  icon,
}) => {
  return (
    <>
      <div className="Transparent">
        <button
          className="Transparent_button"
          onClick={rollDiceFunc || holdDiceFunc || newgame}>
          {icon}
          {BtnName}
        </button>
      </div>
    </>
  );
};
