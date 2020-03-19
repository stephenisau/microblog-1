import axios from "axios";
import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export const getPostFromAPI = (id) => async dispatch => {
  const response = await axios.get(`${API_URL}/${id}`);
  return dispatch(getPost(response.data));
}

const getPost = (post) => {
  return {
    type: FETCH_POST,
    payload: { post },
  };
};

// export function getPostFromAPI(id) {
//   return async function (dispatch) {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return dispatch(getPost(response.data));
//   };
// }

// function getPost(post) {
//   return {
//     type: FETCH_POST,
//     post,
//   };
// }

export const sendPostToAPI = (title, description, body) => async dispatch => {
  const response = await axios.post(`${API_URL}`, {
    title,
    description,
    body
  });
  return dispatch(addPost(response.data));
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: { post }
  };
};

// export function sendPostToAPI(title, description, body) {
//   return async function (dispatch) {
//     const response = await axios.post(`${API_URL}`, {
//       title,
//       description,
//       body
//     });
//     return dispatch(addPost(response.data));
//   };
// }

// function addPost(post) {
//   return {
//     type: ADD_POST,
//     post
//   };
// }

export function removePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    payload: { postId }
  };
}

export function updatePostInAPI(id, title, description, body) {
  return async function (dispatch) {
    const response = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    debugger;
    return dispatch(updatePost(response.data));
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    payload: { post },
  };
}

export function sendVoteToAPI(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

function vote(postId, votes) {
  return {
    type: VOTE,
    payload: {
      postId: postId,
      votes: votes,
    }
  };
}

export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      postId,
      commentId,
    }
  };
}

export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

function addComment(postId, comment) {
  return { type: ADD_COMMENT, payload: { postId, comment } };
}
