import React, { useState } from "react";

import "../index.css";
import Cell from "./Cell";
import { deadState, randState } from "../logic/states";

function Board(props) {
  const [currentBoard, setcurrentBoard] = useState(
    randState(props.rows, props.columns)
  );

  let outarr = [];
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.columns; j++) {
      outarr.push(
        <Cell
          cellState={currentBoard[i][j] === 1 ? "alive" : "dead"}
          cellId={i + "_" + j}
        />
      );
    }
  }

  function handleClick() {
    setcurrentBoard(randState(props.rows, props.columns));
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.columns}, 20px)`,
        }}
      >
        {outarr}
      </div>
      <button onClick={handleClick}>random</button>
    </div>
  );
}

export default Board;
