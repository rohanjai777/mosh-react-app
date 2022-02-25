import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button className="btn btn-success m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
