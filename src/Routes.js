import React, { Component } from "react";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import PostContainer from "./containers/PostContainer";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import ErrorNotFound from "./ErrorNotFound";
import { connect } from "react-redux";
import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";

class Routes extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home posts={this.props.posts} />}
          />
          <Route
            exact
            path="/posts"
            render={() => <PostList posts={this.props.posts} />}
          />
          <Route
            exact
            path="/posts/:id"
            render={rtProps => {
              // const post = this.props.posts.find(
              //   post => +post.id === +rtProps.match.params.id
              // );
              return (
                <PostContainer
                  {...rtProps}
                  // post={{
                  //   id: 1,
                  //   title: "hello",
                  //   description: "hello again",
                  //   body: "no more",
                  //   comments: []
                  // }}
                  // deletePost={this.deletePost}
                  // editPost={this.editPost}
                />
              );
            }}
          />
          <Route
            exact
            path="/new"
            render={rtProps => (
              <NewPostForm
                post={{}}
                edit={false}
                addPost={this.addPost}
                editPost={this.editPost}
                {...rtProps}
              />
            )}
          />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Routes);
