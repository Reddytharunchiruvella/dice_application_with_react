import { useState } from "react";
import "./App.css";
import {
  PrimaryBtn,
  SecondaryBtn,
  TransparentBtn,
} from "./components/Button/button.component";
import Diceimage from "./components/diceimage/diceimage.component";
import { InputBtn } from "./components/InputComponent/input.component";
import {
  FaCirclePlus,
  FaDice,
  FaMugHot,
  FaRegClipboard,
  FaSkullCrossbones,
  FaPause,
  FaRegPenToSquare,
} from "react-icons/fa6";
import { Winner } from "./components/winner/winner.component";
import { PlayerCurrentScores } from "./components/playerCurrentScores/playerCurrentScores.components";
import { EditBtn } from "./components/Edit/edit.component";
import { RulesBtn } from "./components/RulesComponent/rules.component";

function App() {
  const [randomGenNum, setrandomGenNum] = useState(1);
  const [activePlayer, setactivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [input, setInput] = useState(10);

  const [showWinnerPopup, setWinnerPopup] = useState(false);
  const [winnerName, setWinnerName] = useState("");
  const [winnerScore, setWinnerScore] = useState(0);
  const [showEditPopup, setshowEditPopup] = useState(false);
  const [player1Name, setplayer1Name] = useState("Player1");
  const [player2Name, setplayer2Name] = useState("Player2");
  const [showRulesPopup, setshowRulesPopup] = useState(false);

  const rollDice = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    setrandomGenNum(randomNum);
    if (activePlayer === 0) {
      setCurrentScore(currentScore + randomNum);
    } else {
      setCurrentScore(currentScore + randomNum);
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
        callingWinnerFunc("player 1", updatedScore[activePlayer]);
      } else {
        setactivePlayer(1 - activePlayer);
      }
    } else {
      if (updatedScore[activePlayer] >= input) {
        callingWinnerFunc("player 2", updatedScore[activePlayer]);
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
    setrandomGenNum(1);
  };

  const Input = (e) => {
    setInput(e.target.value);
  };

  const EditFunc = () => {
    setshowEditPopup(!showEditPopup);
  };

  const player1access = (e) => {
    setplayer1Name(e.target.value)
  }

  const player2access = (e) => {
    setplayer2Name(e.target.value)
  }

  const RuleFunc = () => {
    setshowRulesPopup(!showRulesPopup);
  };

  return (
    <>
      <section>
        <div className="root-1">
          <div className={`playerone ${activePlayer ? "active" : "inactive"}`}>
            <div className="topBtns">
              <TransparentBtn
                BtnName="NEW GAME"
                newgame={NewGame}
                icon={<FaCirclePlus className="icon" />}
              />
            </div>

            <PlayerCurrentScores
              Playername={player1Name}
              playerscore={playerScore[0]}
              playeractive={activePlayer === 0}
              currentscore={activePlayer === 0 ? currentScore : 0}
            />
            <Diceimage randomNum={randomGenNum} />
            <div className="middleBtns">
              <TransparentBtn
                rollDiceFunc={rollDice}
                BtnName="ROLL DICE"
                icon={<FaDice className="icon" />}
              />
              <TransparentBtn
                holdDiceFunc={holdDice}
                BtnName="HOLD"
                icon={<FaPause className="icon" />}
              />
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
          />
          <SecondaryBtn
            BtnName="HARD MODE"
            icon={<FaSkullCrossbones className="icon" />}
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
      </section>

      <div>
        {showWinnerPopup && (
          <Winner
            Name={winnerName}
            Score={winnerScore}
            closeBtn={callingWinnerFunc}
          />
        )}
        {showEditPopup && <EditBtn editclose={EditFunc} player1Name={player1access} player2Name={player2access}/>}
        {showRulesPopup && <RulesBtn ruleclose={RuleFunc} />}
      </div>
    </>
  );
}

export default App;
