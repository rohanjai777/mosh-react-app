import React, { Component } from "react";
import "../css/Counter.css";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getClasses = () => {
    let className = "badge badge-";
    if (this.state.value === 0) {
      className += "danger";
    } else {
      className += "warning";
    }
    return className;
  };

  render() {
    let classes = this.getClasses();
    let count = this.state.value === 0 ? "zero" : this.state.value;
    console.log("props", this.props.counter.value);
    console.log("state" + this.state.value);
    return (
      <div>
        <span className={`badge-block ${classes}`}>{count}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrement}>
          Increment
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
