import React, { Component } from "react";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import PostDetail from "./PostDetail";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import ErrorNotFound from "./ErrorNotFound";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: "test", description: "what am i", body: "i dont know" },
        { id: 2, title: "test2", description: "doggggg", body: "are cuteeeee" }
      ]
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(postToBeAdded) {
    this.setState(state => ({
      posts: [...state.posts, postToBeAdded]
    }));
  }

  deletePost(id) {
    this.setState(st => ({
      posts: st.posts.filter(post => post.id !== id)
    }));
  }

  editPost(postData) {
    // map through our posts and edit data if id's match
    let editedPosts = this.state.posts.map(post => {
      if (+post.id === +postData.id) {
        debugger;
        return { ...post, title: postData.title, description: postData.description, body: postData.body };
      }
      return post
    });
    this.setState({ posts: editedPosts });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home posts={this.state.posts} />}
          />
          <Route
            exact
            path="/posts"
            render={() => <PostList posts={this.state.posts} />}
          />
          <Route
            exact
            path="/posts/:id"
            render={rtProps => {
              const post = this.state.posts.find(
                post => post.id.toString() === rtProps.match.params.id
              );
              return <PostDetail {...rtProps} post={post} deletePost={this.deletePost} editPost={this.editPost}/>;
            }}
          />
          <Route
            exact
            path="/new"
            render={rtProps => (
              <NewPostForm
                edit={false}
                addPost={this.addPost}
                editPost={this.editPost}
                {...rtProps} />
            )}
          />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
