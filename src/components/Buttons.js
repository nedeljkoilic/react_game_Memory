import React from "react";
import "./game.css";
function Buttons(props) {
  console.log(props);
  const status = (num) => {
    if (props.gameState === "notActive") {
      return "not picked";
    } else if (props.gameState === "ready") {
      if (props.sixRandFlds.includes(num)) {
        return "forMem";
      } else {
        return "notPicked";
      }
    } else {
      if (props.picked.includes(num)) {
        if (props.sixRandFlds.includes(num)) {
          return "correct";
        } else {
          return "wrong";
        }
      } else {
        return "notPicked";
      }
    }
  };
  return (
    <div className="buttons">
      {props.nizDugmadi.map((n) => (
        <button
          key={n}
          className="taster"
          style={{ background: colors[status(n)] }}
          onClick={() => props.onClk(n)}
        ></button>
      ))}
    </div>
  );
}
export default Buttons;

const colors = {
  correct: "green",
  wrong: "red",
  notPicked: "lightgray",
  forMem: "blue",
};
