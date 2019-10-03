import React, { Component } from "react";
import { addComment, removeComment } from './actionCreators';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import CommentList from './CommentList';

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment({ ...this.state, id: uuid(), postId: this.props.postId.toString() })
    this.setState({
      text: ""
    });
    // we want to handle the comment input
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    addComment: () => dispatch(addComment()),
    removeComment: () => dispatch(removeComment())
  }
}

const connected = connect(
  null,
  mapDispatchToProps
)

export default connected(CommentForm);