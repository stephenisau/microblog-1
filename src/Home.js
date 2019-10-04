import React, { Component } from "react";
import PostCard from "./PostCard";

class Home extends Component {

  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    const { posts } = this.props;

    if (posts.length > 0) {
      return (
        <div className="container">
          {posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default Home;
