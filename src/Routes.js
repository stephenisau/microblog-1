import React, { Component } from "react";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
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
  }

  addPost(postToBeAdded) {
    this.setState(state => ({
      posts: [...state.posts, postToBeAdded]
    }));
  }

  render() {
    console.log("FROM ROUTEEEEEESSS", this.state);
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
                post => post.id === +rtProps.match.params.id
              );
              return <Post {...rtProps} post={post} />;
            }}
          />
          <Route
            exact
            path="/new"
            render={rtProps => (
              <NewPostForm addPost={this.addPost} {...rtProps} />
            )}
          />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
