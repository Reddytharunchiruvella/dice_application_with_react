import "./diceimage.styles.css";

export const Diceimage1 = ({ randomNum1 }) => {
  return (
    <>
      <div className="diceimage-1">
        <img src={`/src/assets/images/dice-${randomNum1}.png`} alt="" />
      </div>
    </>
  );
};

export const Diceimage2 = ({ randomNum2 }) => {
  return (
    <>
      <div className="diceimage-2">
        <img src={`/src/assets/images/dice-${randomNum2}.png`} alt="" />
      </div>
    </>
  );
};
