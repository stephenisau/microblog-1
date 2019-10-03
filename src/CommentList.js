import React, { Component } from "react";
import { connect } from 'react-redux';

class CommentList extends Component {

  render() {
    const { posts, postId } = this.props;
    const postComments = posts.map(post => {
      return post.comments.map(comment => {
        return (<div>
          <li>{comment.text}</li>
          <button>Edit</button>
          <button>Delete</button>
        </div>)
      // }
      
    });
    // if (comment.postId.toString() === postId.toString()) {
    });
    debugger;

    return (
      <div>
        <ol>
          {postComments}
        </ol>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(CommentList);