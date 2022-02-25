import React, { Component } from "react";
import "../css/Counter.css";
class Counter extends Component {
  getClasses = () => {
    let className = "badge badge-";
    if (this.props.counter.value === 0) {
      className += "danger";
    } else {
      className += "warning";
    }
    return className;
  };

  render() {
    let classes = this.getClasses();
    let count =
      this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    console.log("props", this.props.counter.value);
    console.log("state" + this.props.counter.value);
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <span className={`badge-block ${classes}`}>{count}</span>
          </div>
          <div class="col">
            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
          </div>
          <div class="col">
            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? true : false}
            >
              -
            </button>
          </div>
          <div class="col-">
            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
