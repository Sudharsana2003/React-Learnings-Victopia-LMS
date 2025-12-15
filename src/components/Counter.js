import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }), () => {
      console.log("Updated Count:", this.state.count)
    })
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>
          Increment 5
        </button>
      </div>
    )
  }
}

export default Counter
