import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };

    // APPROACH 3: Binding in Constructor (Recommended)
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Normal method
  clickHandler() {
    this.setState({
      message: "Goodbye"
    });
    console.log(this);
  }

  // APPROACH 4: Class Property as Arrow Function (Alternative)
  // Uncomment this and comment constructor bind + above method if you want to test
  /*
  clickHandler = () => {
    this.setState({
      message: "Goodbye"
    });
    console.log(this);
  }
  */

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>

        {/* APPROACH 1: Bind in render (NOT recommended for performance) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* APPROACH 2: Arrow function in render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* APPROACH 3 or 4: Direct method reference */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
