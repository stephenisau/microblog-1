import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { putPostFromAPI } from "./actionCreators";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title || "",
      description: props.post.description || "",
      body: props.post.body || ""
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
    if (this.props.edit) {
      let { title, description, body } = this.state;
      let updatedPost = { title, description, body };
      const id = this.props.post.id;
      this.props.putPostFromAPI(id, updatedPost);
      //   this.props.editPost(updatedPost);
    } else {
      this.props.addPost({ ...this.state, id: 10 });
      this.setState({
        title: "",
        description: "",
        body: ""
      });
    }
    this.props.history.push("/");
  }

  render() {
    const button = this.props.edit ? (
      <button type="submit" className="btn btn-warning">
        Update
      </button>
    ) : (
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    );

    return (
      <div className="container">
        <h3>ADD NEW POST: </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Title"
              onChange={this.handleChange}
              value={this.state.title}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="description"
              placeholder="Description"
              onChange={this.handleChange}
              value={this.state.description}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body: </label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              rows="3"
              placeholder="Body"
              onChange={this.handleChange}
              value={this.state.body}
              required
            />
          </div>
          {button}
          <button type="submit" className="btn btn-danger">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Cancel
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { putPostFromAPI }
)(NewPostForm);
