import React, { Component } from "react";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import PostContainer from "./containers/PostContainer";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
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
            render={() => <HomeContainer />}
          />
          <Route
            exact
            path="/posts/:id"
            render={rtProps => {
              return (
                <PostContainer
                  {...rtProps}/>
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
