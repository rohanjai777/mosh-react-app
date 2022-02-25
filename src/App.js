import React, { Component } from "react";
import "./styles.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
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

  handleIncrement = (counter) => {
    let resetCounters = [...this.state.counters]; // copy array
    let index = resetCounters.indexOf(counter); // find index of params counter passed
    resetCounters[index] = { ...counter }; // replace with copy of counter
    resetCounters[index].value++; // increment value of copy
    this.setState({ counters: resetCounters }); // set state equal to copy
  };

  handleDecrement = (counter) => {
    let resetCounters = [...this.state.counters]; // copy array
    let index = resetCounters.indexOf(counter); // find index of params counter passed
    resetCounters[index] = { ...counter }; // replace with copy of counter
    resetCounters[index].value =
      resetCounters[index].value === 0 ? 0 : resetCounters[index].value - 1; // increment value of copy
    this.setState({ counters: resetCounters }); // set state equal to copy
  };

  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
