import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="card">
        <Link to={`posts/${post.id}`}>Title: {post.title}</Link>
        <p>
          Description: <i>{post.description}</i>
        </p>
      </div>
    );
  }
}

export default Post;
