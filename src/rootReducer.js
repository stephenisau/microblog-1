import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST
} from "./actionTypes";

const INITIAL_STATE = {
  posts: [
    {
      id: 100,
      title: "test",
      description: "what am i",
      body: "i dont know",
      comments: [{ postId: 100, id: 1, text: "helloooo" }]
    },
    {
      id: 200,
      title: "test2",
      description: "doggggg",
      body: "are cuteeeee",
      comments: [{ postId: 200, id: 2, text: "gooodbyeeee" }]
    }
  ]
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
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case EDIT_POST:
      debugger;
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload.id
          ? action.payload
          : post
        )
      }
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    default:
      return state;
  }
}
