import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  LOAD_POSTS,
  EDIT_POST,
  ONE_POST
} from "../actions/actionTypes";

const INITIAL_STATE = {
  posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {

    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.comment.postId
            ? { ...post, comments: [...post.comments, action.comment] }
            : post
        )
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      };
    case ONE_POST:
      return {
        ...state,
        post: { ...action.post }
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.post.id ? action.post : post
        )
      };
      
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    default:
      return state;
  }
}
