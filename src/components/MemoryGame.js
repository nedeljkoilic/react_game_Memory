import React, { useState } from "react";
import "./game.css";
import Buttons from "./Buttons";
function MemoryGame() {
  const [sixRandFlds, setSixRandFlds] = useState([]);
  const [picked, setPicked] = useState([]);
  const [gameState, setGameState] = useState("notActive");
  const dugmad = utils.range(1, 25);
  const onClk = (num) => {
    if (picked.includes(num) || gameState !== "inProgress") {
      return;
    } else {
      const newPicked = picked.concat(num);
      let a = 0;
      for (let i = 0; i < newPicked.length; i++) {
        if (!sixRandFlds.includes(newPicked[i])) {
          a++;
        }
      }
      if (a >= 3) {
        setGameState("over");
      } else {
        a = 0;
        for (let i = 0; i < newPicked.length; i++) {
          if (sixRandFlds.includes(newPicked[i])) {
            a++;
          }
          if (a === 6) {
            setGameState("won");
          }
        }
      }
      setPicked(newPicked);
    }
  };
  const onStart = () => {
    setSixRandFlds(utils.sixRand);
    setPicked([]);
    setGameState("ready");
    setTimeout(() => {
      setGameState("inProgress");
    }, 3000);
  };
  return (
    <div>
      <div className="game">
        <Buttons
          nizDugmadi={dugmad}
          sixRandFlds={sixRandFlds}
          picked={picked}
          onClk={onClk}
          gameState={gameState}
        />
      </div>
      <div className="kontrole">
        <button onClick={() => onStart()}>Play</button>
        <label style={{ fontWeight: "bold" }}>
          {gameState === "won"
            ? "Congrats!"
            : gameState === "over"
            ? "Game over!"
            : ""}
        </label>
      </div>
    </div>
  );
}

export default MemoryGame;

const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
  sixRand: () => {
    const arraySix = [];
    while (arraySix.length !== 6) {
      let tempnum = utils.random(1, 25);
      if (!arraySix.includes(tempnum)) {
        arraySix.push(tempnum);
      }
    }
    return arraySix;
  },
};
