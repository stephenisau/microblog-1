import { ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from "./actionTypes";
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: [
    { id: 1, title: "test", description: "what am i", body: "i dont know", comments: [{ id: 1, text: "helloooo" }] },
    { id: 2, title: "test2", description: "doggggg", body: "are cuteeeee", comments: [{ id: 2,  text: "gooodbyeeee" }] }
  ]
}


export default function rootReducer(state = INITIAL_STATE, action) {
  // debugger;
  switch (action.type) {
    case ADD_COMMENT:
      debugger;
      return {
        ...state,
        comments:  action.payload
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      }
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }

    default:
      return state
  }
}