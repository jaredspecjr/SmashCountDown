import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time = 0;
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>hello!</p>
        </div>
      </div>
    );
  }
}
