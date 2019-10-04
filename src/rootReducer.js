import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  LOAD_POSTS,
  PUT_POST,
  ONE_POST
} from "./actionTypes";

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
    case PUT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    // return our posts
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    // case EDIT_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.map(post =>
    //       post.id === action.payload.id ? action.payload : post
    //     )
    //   };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    default:
      return state;
  }
}
