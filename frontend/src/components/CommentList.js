import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

class CommentList extends Component {

  static defaultProps = {
    comments: []
  }

  render() {
    console.log(this.props);
    const { comments } = this.props;
    const postComments = comments.map(comment => {
      return (
        <Comment key={comment.id} id={comment.id} text={comment.text} delete={this.props.removeComment}/>
      );
    });

    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {postComments}
          </ul>
      </div>
    );
  }
}

export default CommentList;
