import React, { Component } from "react";
import "./App.css";
import BoardList from "./BoardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> React Board </h2>
        <BoardList />
      </div>
    );
  }
}

export default App;
