import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  LOAD_POSTS
} from "./actionTypes";
import axios from "axios";

export function getPostsFromAPI() {
  return async function (dispatch) {
    try {
      let res = await axios.get('http://localhost:5000/api/posts')
      dispatch(getPosts(res.data))
    } catch (err) {
      console.error(err.res.data);
    }
  };
}

function getPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
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



export function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post: post
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id: id
  };
}
