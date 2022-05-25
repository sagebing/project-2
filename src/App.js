import React, { Component } from "react";
import "./App.css";
import Example from "./Components/Example";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Tree-Szn</h1>
        <Example />
      </div>
    );
  }
}

export default App;
