import React, { PropTypes, Component } from "react";
import { Route, Switch } from "react-router-dom";
import image from "../assets/images/smash.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      sec: 0,
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
      <div className="app">
        <div className ="head">
          <img className="image" src={image} />
        </div>
        <div>
          <h1>Count Down</h1>
        </div>
        <div className="timer">
          <p>{this.state.days} Days</p>
          <p>{this.state.hours} Hrs</p>
          <p>{this.state.mins} Mins</p>
          <p>{this.state.sec} Sec</p>
        </div>
        <style jsx>{`
          .app {
            color: white;
            font-size: 50px;
            text-align: center;
            background-color: black;
            width: 100%;
            height: 100%;
            margin: -8px;
            margin-top:-21px;
            padding-top: 50px;
            padding: 15px;
          }
          .timer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: -50px;
            padding: 20px;
          }
          .image {
            width: 100%;
          }
          .head {
            margin: -50px;
          }

      `}</style>
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
