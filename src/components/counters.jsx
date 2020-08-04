import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 99 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((xx) => (
          <Counter key={xx.id} value={xx.value} />
        ))}
      </div>
    );
  }
}

export default counters;
