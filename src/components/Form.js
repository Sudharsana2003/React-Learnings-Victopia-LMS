import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  // Handler for username input
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  // Handler for comments textarea
  handleCommentsChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  // Handler for topic select
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  // Handler for form submission
  handleSubmit = (event) => {
    alert(
      `Username: ${this.state.username}\nComments: ${this.state.comments}\nTopic: ${this.state.topic}`
    );
    event.preventDefault(); // Prevent page reload
  };

  render() {
    const { username, comments, topic } = this.state; // destructuring

    return (
      <div>
        <h2>React Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Comments: </label>
            <textarea
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <label>Topic: </label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
