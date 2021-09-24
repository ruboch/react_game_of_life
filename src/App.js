import React, { useState } from "react";
import Board from "./components/Board";
import { randState } from "./logic/states";

import "./App.css";
function App() {
  // The number of rows columns is set in this component and passed down to child components as props.
  // Board is generated according to the number of rows and columns in the same way and passed down to child components.

  const [columns, setColumns] = useState(40);
  const [rows, setRows] = useState(30);
  const [system, setSystem] = useState(randState(rows, columns));

  function handleChange(event) {
    let { name, value } = event.target;
    if (name === "rows") {
      setRows(value);
    }
    if (name === "columns") {
      setColumns(value);
    }
    setSystem(randState(rows, columns));
  }

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div id="sliders">
        <form>
          Columns: {columns}
          <input
            type="range"
            name="columns"
            min="10"
            max="80"
            value={columns}
            class="slider"
            onChange={handleChange}
          />
          <br />
          Rows: {rows}
          <input
            type="range"
            name="rows"
            min="10"
            max="60"
            value={rows}
            class="slider"
            onChange={handleChange}
          />
        </form>
        <Board className="Board" rows={rows} columns={columns} state={system} />
      </div>
    </div>
  );
}

export default App;
