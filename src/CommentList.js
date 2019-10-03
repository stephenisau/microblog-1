import React, { Component } from "react";
import { connect } from 'react-redux';

class CommentList extends Component {

  render() {
    const { post, postId } = this.props;
    const postComments = post.map(p => {
      return p.comments.map(comment => {
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
          {/* this.props.postComments */}
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