import React, { Component } from "react";
import PostCard from "./PostCard";

class Home extends Component {

  componentDidMount() {
    if (!this.props.posts) {
      this.props.getPostsFromAPI();
    }
  }

  render() {
    if (this.props.posts) {
      return (
        <div className="container">
          {this.props.posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default Home;
