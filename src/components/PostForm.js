import React, { Component } from "react";
import Axios from "axios";

class PostForm extends Component {
  state = {
    userId: "",
    title: "",
    body: ""
  };

  // Handler for input changes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handler for form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    console.log("Data to post:", this.state);

    // Make POST request with Axios
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <h2>Create a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
