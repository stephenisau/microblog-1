import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./PostDetail.css";
import NewPostForm from './NewPostForm';

class PostDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(evt) {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  }

  handleEdit(evt) {
    this.setState({edit: true})
  }

  render() {
    const { post } = this.props;
    const displayPost = this.state.edit ?  
    <NewPostForm 
      edit={true}
      editPost={this.props.editPost}
      post={post}/>
    :
      <div>
        <h1>{post.title}</h1>
        <h5>{post.description}</h5>
        <p>{post.body}</p>
        <div className="post-buttons">
          <Link 
            onClick={this.handleEdit}
            className="edit-button">
            <i className="fas fa-edit"></i>
          </Link>
          <Link
            className="delete-button"
            onClick={this.handleDelete}>
            <i className="far fa-trash-alt"></i>
          </Link>
        </div>
      </div >

    return (
      <div>
        {displayPost}
      </div >
    );
  }
}

export default PostDetail;