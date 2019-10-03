import React, { Component } from "react";
import PostCard from "./PostCard";
import "./PostList.css";
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    const arrayofPost = posts.map(post => <PostCard key={post.id} post={post} />);
    return (
      <div className="container-fluid">
        <div className="post-list">
          {arrayofPost}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);
