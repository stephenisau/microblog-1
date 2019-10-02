import React, { Component } from "react";
import PostCard from "./PostCard";

class PostList extends Component {
  render() {
    const { posts } = this.props;
    const arrayofPost = posts.map(post => <PostCard key={post.id} post={post} />);
    return (
      <div className="container-fluid">
          {arrayofPost}
      </div>
    );
  }
}

export default PostList;
