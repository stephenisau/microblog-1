import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: ""
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
    console.log("INSIDE HANDLE SUBMIT");
    this.props.addPost({ ...this.state, id: uuid() });
    this.setState({
      title: "",
      description: "",
      body: ""
    });
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
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

export default NewPostForm;
