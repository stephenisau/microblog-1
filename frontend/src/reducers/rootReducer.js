import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  LOAD_POSTS,
  EDIT_POST,
  ONE_POST
} from "../actions/actionTypes";


export default function rootReducer(state = {}, action) {
  let copy = {...state};
  let currPost;
  let newPost;
  let posts;
  let idx;

  switch (action.type) {

    case LOAD_POSTS:
      return { ...copy, posts: [...action.posts] };

    case ONE_POST:
      return {
        ...state, [action.post.id]: { ...action.post }
      };

    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: { ...action.post, comments: state[action.post.id].comments }
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };

    case REMOVE_POST:
      posts = { ...state };
      idx = state.posts.findIndex(post => post.id === action.id);
      delete posts[idx];
      return posts;

    case ADD_COMMENT:
      currPost = copy[action.postId];
      return {
        ...state,
        [action.postId]: { ...currPost, comments: [...currPost.comments, action.comment] }
      };

    case REMOVE_COMMENT:
      currPost = state[action.postId];
      return {
        ...state,
        [action.postId]: {
          ...currPost,
          comments: currPost.comments.filter(p => p.id !== action.commentId)
        }
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
