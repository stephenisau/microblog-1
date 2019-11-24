import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  LOAD_POSTS,
  ONE_POST,
  VOTE
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
  return async function (dispatch) {
    try {
      let res = await axios.put(`http://localhost:5000/api/posts/${id}`, { updatedPost });
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

function getOnePost(post) {
  return {
    type: ONE_POST,
    post
  };
}


function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function addPostToAPI(post) {
  const { title, description, body } = post;
  return async function (dispatch) {
    let res = await axios.post(`http://localhost:5000/api/posts/`, { title, description, body });
    dispatch(addPost(res.data));
  }
}

export function removePostFromAPI(id) {
  return async function(dispatch) {
    try {
      let res = await axios.delete(`http://localhost:5000/api/posts/${id}`);
      dispatch(removePost(id=res.data.id))
    } catch (err) {
      console.log(`Error!`)
    }
  }
}


export function removePost(id) {
  return {
    type: REMOVE_POST,
    id: id
  };
}


export function addCommentToAPI(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`http://localhost:5000/api/posts/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

function addComment(postId, comment) {
  return { type: ADD_COMMENT, postId, comment };
}

export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}


export function sendVoteToAPI(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`http://localhost:5000/api/posts/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

function vote(postId, votes) {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  };
}
