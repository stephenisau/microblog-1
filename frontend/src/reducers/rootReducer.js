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
  posts: [],
  comments: [],
  post: {}
};

export default function rootReducer(state = {}, action) {

  switch (action.type) {

    case LOAD_POSTS:
      let copy = { ...state }
      return { ...copy, posts: [...action.posts] };

    case ONE_POST:
      return {
        ...state, post: { ...action.post }
      };

    case EDIT_POST:
      debugger;
      return {
        ...state,
        post: state.post.map(p =>
          p.id === action.post.id ? action.post : p
        )
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };

    case REMOVE_POST:
      let posts = { ...state };
      let idx = state.posts.findIndex(post => post.id === action.id);
      delete posts[idx];
      return posts;

    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: [...state.post.comments, action.comment] }
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        post: { ...state.post, 
          comments: state.post.comments.filter(p => p.id !== action.commentId) }
      }


    // case VOTE:
    //   return {
    //     ...state,
    //     [action.postId]: { ...state, votes: action.votes }
    //   };


    default:
      return state;
  }
}
