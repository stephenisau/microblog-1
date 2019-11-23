import React, { Component } from "react";
import "./PostDetail.css";
import NewPostForm from "./components/NewPostForm";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.getOnePostFromAPI(this.props.match.params.id);
  }

  handleDelete(evt) {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  }

  handleEdit(evt) {
    this.setState({ edit: true });
  }

  render() {
    console.log("PROPS: ", this.props);
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
            <button onClick={this.handleEdit} className="edit-button">
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-button" onClick={this.handleDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <hr />
          <CommentList post={post} postId={post.id} />
          <CommentForm postId={post.id} />
        </div>
      );

      return <div>{displayPost}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PostDetail;
