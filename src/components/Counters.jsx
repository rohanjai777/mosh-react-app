import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    let remainingCounter = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters: remainingCounter });
  };

  handleReset = () => {
    let resetCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetCounters });
  };

  render() {
    return (
      <>
        <button className="btn btn-success m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((c) => (
          <Counter key={c.id} counter={c} onDelete={this.handleDelete} />
        ))}
      </>
    );
  }
}

export default Counters;
