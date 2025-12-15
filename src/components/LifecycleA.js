// LifecycleA.js
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sudharsana",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleA shouldComponentUpdate");
    return true; // allow rerender
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null; // could return scroll position etc.
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({ name: "Code Evolution" });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <h1>LifecycleA - {this.state.name}</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
