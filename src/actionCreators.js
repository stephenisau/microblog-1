import { ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from "./actionTypes";

export function addComment(comment) {
  debugger;
  return {
    type: ADD_COMMENT,
    comment: comment
  }
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id: id
  }
}