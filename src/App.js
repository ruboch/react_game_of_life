import React, { useState } from "react";
import Board from "./components/Board";
import { deadState, randState } from "./logic/states";

function App() {
  const [rows, setRows] = useState(30);
  const [columns, setColumns] = useState(40);

  function handleChange(event) {
    let { name, value } = event.target;
    if (value < 4) {
      value = 4;
    }
    if (name === "rows") {
      setRows(value);
    } else if (name === "columns") {
      setColumns(value);
    }
  }

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <form>
        <input type="text" name="rows" value={rows} onChange={handleChange} />

        <input
          type="text"
          name="columns"
          value={columns}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <Board className="Board" rows={rows} columns={columns} />
    </div>
  );
}

export default App;
