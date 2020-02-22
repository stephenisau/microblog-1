import React from "react";
import "./NewPost.css";
import { connect } from "react-redux";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "../components/PostForm";

/** Show post form, and handle editing of it. */

const NewPost = (props) => {

  /** Adds post and saves to backend. */
  const add = ({ title, description, body}) => {
    props.sendPostToAPI(title, description, body);
    props.history.push('/');
  }


  /** Cancel (redirect) */
  const cancel = () => {
    props.history.push("/");
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} />
    </main>
  );
}


export default connect(
  null,
  { sendPostToAPI }
)(NewPost);
