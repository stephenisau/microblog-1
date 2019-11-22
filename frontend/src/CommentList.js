import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { post } = this.props;
    const postComments = post.comments.map(comment => {
      return (
        <div key={comment.id}>
          <li>{comment.text}</li>
          <button style={{ color: "red" }}>
            <b>X</b>
          </button>
        </div>
      );
    });

    return (
      <div>
        <ul style={{ listStyle: "none" }}>{postComments}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(CommentList);
