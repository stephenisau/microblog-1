import React, { Component } from "react";

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>
          <i>{post.description}</i>
        </p>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;
