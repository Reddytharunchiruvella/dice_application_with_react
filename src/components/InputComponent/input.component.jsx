import "./input.styles.css";

export const InputBtn = ({ inputFunc }) => {
  return (
    <>
      <input
        id="input"
        type="number"
        placeholder="Set Target Score"
        onChange={inputFunc}
      />
    </>
  );
};
