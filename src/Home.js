import React, { Component } from "react";
import PostList from "./PostList";

class Home extends Component {
  render() {
    const posts = this.props.posts;
    const arrayofPost = posts.map(post => <Post key={post.id} post={post} />);
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

export default Home;
