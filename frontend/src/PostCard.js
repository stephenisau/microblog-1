import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-card">
        <div className="row card">
          <span className="votes col-sm-1">
            <i class="fas fa-arrow-up" />
            {null}
            <i class="fas fa-arrow-down" />
            <i class="far fa-comments" />
          </span>
          <div className="card-body col-sm-11">
            <Link to={`posts/${post.id}`}>Title: {post.title}</Link>
            <p>
              Description: <i>{post.description}</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
