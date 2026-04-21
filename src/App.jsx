import { useState } from "react";
import "./App.css";
import {
  PrimaryBtn,
  SecondaryBtn,
  TransparentBtn,
} from "./components/Button/button.component";
import {
  Diceimage1,
  Diceimage2,
} from "./components/diceimage/diceimage.component";
import { InputBtn } from "./components/InputComponent/input.component";
import {
  FaCirclePlus,
  FaDice,
  FaMugHot,
  FaRegClipboard,
  FaSkullCrossbones,
  FaPause,
  FaRegPenToSquare,
  FaArrowRotateRight,
} from "react-icons/fa6";
import { Winner } from "./components/winner/winner.component";
import { PlayerCurrentScores } from "./components/playerCurrentScores/playerCurrentScores.components";
import { EditBtn } from "./components/Edit/edit.component";
import { RulesBtn } from "./components/RulesComponent/rules.component";

function App() {
  const [randomGenNum1, setrandomGenNum1] = useState(1);
  const [randomGenNum2, setrandomGenNum2] = useState(1);

  const [activePlayer, setactivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [input, setInput] = useState(50);

  const [startGame, setStartGame] = useState(false);
  const [mode, setMode] = useState("normal");

  const [showWinnerPopup, setWinnerPopup] = useState(false);
  const [winnerName, setWinnerName] = useState("");
  const [winnerScore, setWinnerScore] = useState(0);

  const [showEditPopup, setshowEditPopup] = useState(false);
  const [player1Name, setplayer1Name] = useState("Player1");
  const [player2Name, setplayer2Name] = useState("Player2");
  const [showWarning, setShowWarning] = useState("");

  const [showRulesPopup, setshowRulesPopup] = useState(false);

  const rollDice = () => {
    const randomNum1 = Math.ceil(Math.random() * 6);
    const randomNum2 = Math.ceil(Math.random() * 6);
    setrandomGenNum1(randomNum1);
    setrandomGenNum2(randomNum2);

    if (randomNum1 !== 1) {
      if (activePlayer === 0) {
        setCurrentScore(currentScore + randomNum1);
      } else {
        setCurrentScore(currentScore + randomNum1);
      }
    } else {
      if (activePlayer === 0) {
        setCurrentScore(0);
      } else {
        setCurrentScore(0);
      }
      setactivePlayer(1 - activePlayer);
    }
  };

  const callingWinnerFunc = (name, score) => {
    setWinnerName(name);
    setWinnerScore(score);
    setWinnerPopup(!showWinnerPopup);
  };

  const holdDice = () => {
    const updatedScore = [...playerScore];
    updatedScore[activePlayer] += currentScore;

    if (activePlayer === 0) {
      if (updatedScore[activePlayer] >= input) {
        callingWinnerFunc(player1Name, updatedScore[activePlayer]);
      } else {
        setactivePlayer(1 - activePlayer);
      }
    } else {
      if (updatedScore[activePlayer] >= input) {
        callingWinnerFunc(player2Name, updatedScore[activePlayer]);
      } else {
        setactivePlayer(1 - activePlayer);
      }
    }
    setPlayerScore(updatedScore);
    setCurrentScore(0);
  };

  const NewGame = () => {
    setCurrentScore(0);
    setPlayerScore([0, 0]);
    setactivePlayer(0);
    setrandomGenNum1(1);
    setplayer1Name("Player1");
    setplayer2Name("Player2");
  };

  const StartGame = () => {
    setStartGame(!startGame);
  };

  const Input = (e) => {
    setInput(e.target.value);
  };

  const EditFunc = () => {
    setshowEditPopup(!showEditPopup);
  };

  const editCLose = () => {
    if (player1Name === "Player1" || player2Name === "Player2") {
      setShowWarning("Player names required");
      return;
    } else {
      setShowWarning("");
      setshowEditPopup(!showEditPopup);
    }
  };

  const player1access = (e) => {
    setplayer1Name(e.target.value);
  };

  const player2access = (e) => {
    setplayer2Name(e.target.value);
  };

  const RuleFunc = () => {
    setshowRulesPopup(!showRulesPopup);
  };

  const HardModeFunc = () => {
    setMode("hard");
  };

  const NormalModeFunc = () => {
    setMode("normal");
  };

  let changeMode = mode === "hard" ? "hard-BG" : "normal-BG";

  return (
    <>
      <section className={changeMode}>
        <div className="root-1">
          <div className={`playerone ${activePlayer ? "active" : "inactive"}`}>
            <div className="topBtns">
              <TransparentBtn
                BtnName="NEW GAME"
                newgame={NewGame}
                icon={<FaArrowRotateRight className="icon" />}
              />
              <TransparentBtn
                BtnName="START GAME"
                startgame={StartGame}
                icon={<FaCirclePlus className="icon" />}
              />
            </div>

            <PlayerCurrentScores
              Playername={player1Name}
              playerscore={playerScore[0]}
              playeractive={activePlayer === 0}
              currentscore={activePlayer === 0 ? currentScore : 0}
            />
            <Diceimage1 randomNum1={randomGenNum1} />
            {mode === "hard" && <Diceimage2 randomNum2={randomGenNum2} />}
            <div className="middleBtns">
              {startGame && (
                <TransparentBtn
                  rollDiceFunc={rollDice}
                  BtnName="ROLL DICE"
                  icon={<FaDice className="icon" />}
                />
              )}
              {startGame && (
                <TransparentBtn
                  holdDiceFunc={holdDice}
                  BtnName="HOLD"
                  icon={<FaPause className="icon" />}
                />
              )}
            </div>
          </div>
          <div className={`playertwo ${!activePlayer ? "active" : "inactive"}`}>
            <PlayerCurrentScores
              Playername={player2Name}
              playerscore={playerScore[1]}
              playeractive={activePlayer === 1}
              currentscore={activePlayer === 1 ? currentScore : 0}
            />
          </div>
        </div>
        <div className="root-2">
          <PrimaryBtn
            BtnName="NORMAL MODE"
            icon={<FaMugHot className="icon" />}
            clickNormalModeBtn={NormalModeFunc}
          />
          <SecondaryBtn
            BtnName="HARD MODE"
            icon={<FaSkullCrossbones className="icon" />}
            clickHardModeBtn={HardModeFunc}
          />
          <InputBtn inputFunc={Input} />
          <SecondaryBtn
            BtnName="RULES"
            icon={<FaRegClipboard className="icon" />}
            clickRuleBtn={RuleFunc}
          />
          <PrimaryBtn
            BtnName="EDIT PLAYER NAME"
            icon={<FaRegPenToSquare className="icon" />}
            clickEditBtn={EditFunc}
          />
        </div>
        <div>
          {showWinnerPopup && (
            <Winner
              Name={winnerName}
              Score={winnerScore}
              closeBtn={callingWinnerFunc}
            />
          )}
          {showEditPopup && (
            <EditBtn
              editclose={editCLose}
              player1Name={player1access}
              player2Name={player2access}
              showwarning={showWarning}
            />
          )}
          {showRulesPopup && <RulesBtn ruleclose={RuleFunc} />}
        </div>
      </section>
    </>
  );
}

export default App;
