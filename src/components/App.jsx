import React, { PropTypes, Component } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }
  componentWillUnmount() {
    this.stop();
  }
  stop() {
    clearInterval(this.interval);
  }
  addLeadingZeroes(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }
  calculateCountdown() {
    const endDate = "December 7, 2018";
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      mins: 0,
    };
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff/ 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.mins = Math.floor(diff / 60);
      diff -= timeLeft.mins * 60;
    }
    timeLeft.sec = diff;
    return timeLeft;
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.days}</p>
          <p>{this.state.hours}</p>
          <p>{this.state.mins}</p>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  date: PropTypes.string.isRequired
};
App.defaultProps = {
  date: new Date()
};

export default App;
