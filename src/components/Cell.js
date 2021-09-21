import React from "react";

function Cell(props) {
  const aliveStyle = {
    width: "20px",
    height: "20px",
    border: "1px solid black",
    backgroundColor: "black",
  };

  const deadStyle = {
    width: "20px",
    height: "20px",
    border: "1px solid white",
  };

  return (
    <div
      key={props.cellId}
      style={props.cellState === "alive" ? aliveStyle : deadStyle}
    />
  );
}

export default Cell;
