import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  LOAD_POSTS,
  ONE_POST
} from "./actionTypes";
import axios from "axios";

export function getPostsFromAPI() {
  return async function (dispatch) {
    try {
      let res = await axios.get("http://localhost:5000/api/posts");
      dispatch(getPosts(res.data));
    } catch (err) {
      console.log("Error getting posts from API");
    }
  };
}

function getPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}

export function editPostFromAPI(id, updatedPost) {
  debugger;
  return async function (dispatch) {
    debugger;
    try {
      let res = await axios.put(`http://localhost:5000/api/posts/${id}`, {
        data: updatedPost
      });
      dispatch(editPost(res.data));
    } catch (err) {
      console.log(`Error editing post ${id}`);
    }
  };
}

function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

export function getOnePostFromAPI(id) {
  return async function (dispatch) {
    try {
      let res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      dispatch(getOnePost(res.data));
    } catch (err) {
      console.log(`Error getting post ${id}`);
    }
  };
}


function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function addPostToAPI(post) {
  debugger;
  const { title, description, body } = post;
  return async function (dispatch) {
    debugger;
    let res = await axios.post(`http://localhost:5000/api/posts/`, { title, description, body });
    dispatch(addPost(res.data));
  }
}

function getOnePost(post) {
  return {
    type: ONE_POST,
    post
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment: comment
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id: id
  };
}
