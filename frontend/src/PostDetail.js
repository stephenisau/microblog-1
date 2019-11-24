import React, { Component } from "react";
import "./PostDetail.css";
import NewPostForm from "./components/NewPostForm";
import CommentList from "./components/CommentList";
import CommentForm from "./CommentForm";

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
    this.props.history.push("/");
  }

  editPost() {
    this.setState({ edit: true });
  }

  addComment(comment) {
    let postId = this.props.post.id;
    this.props.addCommentToAPI(postId, comment);
  }

  removeComment(commentId){
    let postId = this.props.post.id;
    this.props.removeCommentFromAPI(postId, commentId);
  }

  render() {
    console.log(this.props);
    const { post } = this.props;
    if (post) {
      const displayPost = this.state.edit ? (
        <NewPostForm edit={true} editPost={this.props.editPostFromAPI} post={post} />
      ) : (
        <div>
          <h1>{post.title}</h1>
          <h5>{post.description}</h5>
          <p>{post.body}</p>
          <div className="post-buttons">
            <button onClick={this.editPost} className="edit-button">
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-button" onClick={this.deletePost}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <hr />
          <CommentList comments={post.comments} postId={post.id} removeComment={this.removeComment}/>
          <CommentForm postId={post.id}  addComment={this.addComment}/>
        </div>
      );

      return <div>{displayPost}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PostDetail;
