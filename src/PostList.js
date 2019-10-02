import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    const posts = this.props.posts;
    const arrayofPost = posts.map(post => <Post key={post.id} post={post} />);
    return <div>{arrayofPost}</div>;
  }
}

export default PostList;
