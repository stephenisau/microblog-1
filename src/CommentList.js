import React, { Component } from "react";
import { connect } from 'react-redux';

class CommentList extends Component {

  render() {
    const { posts, postId } = this.props;
    const postComments = posts.comments.map(comment => {
      if (comment.postId.toString() === postId.toString()) {
        return (<div key={comment.id}>
          <li>{comment.text}</li>
          <button>Edit</button>
          <button>Delete</button>
        </div>)
      }
    });

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