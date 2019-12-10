import React, { Component } from "react";
import { Link } from 'react-router-dom';

class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description:  "",
      body:  ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  cancel() {
    this.props.history.push("/");
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let { title, description, body } = this.state;
    let updatedPost = { title, description, body };
    const id = this.props.post.id;
    this.props.editPost(id, updatedPost);
    this.props.history.push("/");
  }

  render() {
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
          <Link to={`${this.props.post.id}/edit`} className="btn btn-warning">
            Update
          </Link>
          <button type="submit" className="btn btn-danger">
            <Link to="/" onClick={this.cancel} style={{ color: "white", textDecoration: "none" }}>
              Cancel
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default EditPostForm;