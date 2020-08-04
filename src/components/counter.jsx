import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["aa1", "aa2", "aa3"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  arrayCondition() {
    if (this.state.tags.length === 0) return <h1>Empty Array</h1>;
    return (
      <ul>
        {this.state.tags.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    );
  }
  handleIncrementButton = (randomText) => {
    this.setState({ tags: this.state.tags.concat(randomText) });
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrementButton("1243asd")}
          style={{ fontSize: 15 }}
          className="btn btc-secondary btn-sm"
        >
          Increment
        </button>
        {this.arrayCondition()}
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
