import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    let postId = this.props.postId
    this.props.removeComment(postId)
  }

  render() {
    console.log(this.props);
    const { post } = this.props;
    const postComments = post.comments.map(comment => {
      return (
        <div key={comment.id}>
          <li>{comment.text}</li>
          <button style={{ color: "red" }} >
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

export default CommentList;
