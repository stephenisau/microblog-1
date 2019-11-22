import { connect } from "react-redux";
import { getPostsFromAPI } from "../actionCreators";
import Home from "../Home";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPostsFromAPI }
)(Home);