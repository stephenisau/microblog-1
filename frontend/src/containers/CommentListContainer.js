import { connect } from 'react-redux';
import { removeCommentFromAPI } from "../actions/actionCreators";
import CommentList from "../components/CommentList";


function mapStateToProps(state) {
  return {
    post: state.comments
  }
}

export default connect(
  mapStateToProps,
  { removeCommentFromAPI }
)(CommentList);