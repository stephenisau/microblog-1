import { connect } from "react-redux";
import { editPostFromAPI, getOnePostFromAPI } from '../actions/actionCreators';
import EditPostForm from '../components/EditPostForm';


function mapDispatchToProps(state, props) {
  let id = props.match.params.id; 
  return {
    id,
    post: state.posts[id]
  }
}

export default connect(
  mapDispatchToProps,
  {
    editPostFromAPI,
    getOnePostFromAPI
  }
)(EditPostForm);
