import React, { Component } from "react";
import "./index.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="flex flex-col text-center items-center">
        <h1 className="font-bold">
          Your Favorite Number is: {this.state.count}
        </h1>
        <button
          onClick={this.increase}
          className="border-black border-2 border-solid size-20"
        >
          Add if you dare 👿
        </button>
        <button
          onClick={this.decrease}
          className="border-black border-2 border-solid size-20"
        >
          Subtract if you dare 😈
        </button>
      </div>
    );
  }
}

export default Counter;
