import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

class Post extends Component {
  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <div className="post-card">
        <div className="card">
          <Link to={`posts/${post.id}`}>Title: {post.title}</Link>
          <p>
            Description: <i>{post.description}</i>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
