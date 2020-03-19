import {
  FETCH_POST,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";



export default function rootReducer(state = {}, action) {
  let p;

  switch (action.type) {

    case FETCH_POST:
      debugger;
      return { ...state, [action.payload.post.id]: action.payload.post };

    case ADD_POST:
      return { ...state, [action.payload.post.id]: { ...action.payload.post, comments: [] }};

    case UPDATE_POST:
      return {
        ...state,
        [action.payload.post.id]: {
          ...action.payload.post,
          comments: state[action.payload.post.id].comments
        }
      };

    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.payload.postId];
      return posts;

    case VOTE:
      p = state[action.payload.postId];
      return {
        ...state,
        [action.payload.postId]: { ...p, votes: action.payload.votes }
      };

    case ADD_COMMENT:
      p = state[action.payload.postId];
      return {
        ...state,
        [action.payload.postId]: { ...p, comments: [...p.comments, action.payload.comment] }
      };

    case REMOVE_COMMENT :
      p = state[action.payload.postId];
      return {
        ...state,
        [action.payload.postId]: {
          ...p, comments: p.comments.filter(c => c.id !== action.payload.commentId)
        }
      };

    default:
      return state;
  }
}
