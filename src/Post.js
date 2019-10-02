import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <Link to={`posts/${post.id}`}>{post.title}</Link>
        <p>
          <i>{post.description}</i>
        </p>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;
