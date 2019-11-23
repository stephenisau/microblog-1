import React, { Component } from "react";
import { addComment, removeComment } from "./actions/actionCreators";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
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
    this.props.addComment({ ...this.state, postId: this.props.postId, id: 3 });
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

const connected = connect(
  null,
  { addComment, removeComment }
);

export default connected(CommentForm);
