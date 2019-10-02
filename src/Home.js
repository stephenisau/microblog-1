import React, { Component } from "react";
import PostList from "./PostList";
import { Link } from "react-router-dom";
import Post from "./Post";

class Home extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Home;
