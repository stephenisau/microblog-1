import React, { Component } from "react";
import { addCommentToAPI, removeCommentFromAPI } from "./actions/actionCreators";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      postId: this.props.postId
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
    let { text } = this.state;
    let postId = this.props.postId;
    this.props.addComment(postId, text);
    this.setState({
      text: ""
    });
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required="true"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button 
            onClick={this.handleSubmit}
            className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const connected = connect(
  null,
  { addCommentToAPI }
);

export default connected(CommentForm);
