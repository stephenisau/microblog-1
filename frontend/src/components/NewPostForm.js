import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title || "",
      description: props.post.description || "",
      body: props.post.body || "",
      bold: false,
      italic: false,
      underline: false
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
    this.props.cancel();
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.edit) {
      let { title, description, body } = this.state;
      let updatedPost = { title, description, body };
      const id = this.props.post.id;
      this.props.editPost({id, title, description, body});
    } else {
      this.props.addPostToAPI({ ...this.state });
      this.setState({
        title: "",
        description: "",
        body: ""
      });
      this.props.history.push("/");
    }
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
            
            <span className="">
              <button onClick={this.handleBold}><i class="fas fa-bold"></i></button>
              <button onClick={this.handleItalic}><i class="fas fa-italic"></i></button>
              <button onClick={this.handleUnderline}><i class="fas fa-underline"></i></button>
            </span>
          </div>
          {button}
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

export default withRouter(NewPostForm);
