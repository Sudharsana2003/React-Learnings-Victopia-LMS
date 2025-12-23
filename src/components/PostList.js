import React, { Component } from "react";
import axios from "axios";

/* ===============================================
lifecycle flow:

Component is created
constructor() runs → initializes state
render() runs → UI shows static text
componentDidMount() runs → API call is made
API response arrives
setState() updates state
Component re-renders
Data appears in UI

📌 componentDidMount() is the correct place to make API calls in class components because:

It runs only once
Component is already mounted
Safe to update state
=============================================== */

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: "Error retrieving data"
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;

    return (
      <div>
        <h2>List of Posts</h2>

        {errorMessage && <p>{errorMessage}</p>}

        {posts.length
          ? posts.map(post => (
              <div key={post.id}>
                {post.title}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default PostList;
