import React, { Component } from "react";
import "./PostDetail.css";
import NewPostForm from "../components/NewPostForm";
import CommentList from "../components/CommentList";
import CommentForm from "../CommentForm";

import { connect } from "react-redux";
import { getOnePostFromAPI, removePostFromAPI, editPostFromAPI, addCommentToAPI, removeCommentFromAPI } from "../actions/actionCreators";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  componentDidMount() {
    this.props.getOnePostFromAPI(this.props.match.params.id);
  }


  deletePost() {
    let postId = this.props.post.id
    this.props.removePostFromAPI(postId);
    this.props.history.push('/');
  }

  editPost({ title, description, body }) {
    let id = this.props.post.id;
    this.props.editPostFromAPI(id, title, description, body)
    this.toggleEdit();
  }

  toggleEdit = () => {
    this.setState(st => ({ edit: !st.edit }));
  }

  addComment(postId, comment) {
    this.props.addCommentToAPI(postId, comment);
  }

  removeComment(commentId) {
    let postId = this.props.post.id;
    this.props.removeCommentFromAPI(postId, commentId);
  }

  render() {
    console.log(this.state)
    const { post } = this.props;
    if (!post) return <div>Loading...</div>;

    const displayPost = this.state.edit ? (
      <React.Fragment>
        <NewPostForm edit={true} editPost={this.editPost} post={post} cancel={this.toggleEdit} />
        <hr />
        <CommentList comments={post.comments} postId={post.id} removeComment={this.removeComment} />
        <CommentForm postId={post.id} addComment={this.addComment} />
      </React.Fragment>
    ) : (
        <div>
          <h1>{post.title}</h1>
          <h5>{post.description}</h5>
          <p>{post.body}</p>
          <div className="post-buttons">
            <button onClick={this.toggleEdit} className="edit-button">
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-button" onClick={this.deletePost}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <hr />
          <CommentList comments={post.comments} postId={post.id} removeComment={this.removeComment} />
          <CommentForm postId={post.id} addComment={this.addComment} />
        </div>
      );

    return <div>{displayPost}</div>;
  }
}


function mapStateToProps(state, props) {
  let id = +props.match.params.id;
  return {
    post: state[id],
    id
  }
}

export default connect(
  mapStateToProps,
  { getOnePostFromAPI, removePostFromAPI, editPostFromAPI, addCommentToAPI, removeCommentFromAPI }
)(PostDetail);
