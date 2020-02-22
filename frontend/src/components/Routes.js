import React, { Component } from "react";
import PrivateRoute from './PrivateRoute';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Post from '../containers/Post';
import NewPost from '../containers/NewPost';
import LoginContainer from '../containers/LoginContainer';
import Login from "./Login";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/new"
            render={(props) => <NewPost {...props} />} />
          <Route exact path="/"
            render={() => <Home />} />
          <Route exact path="/:postId"
            render={(props) => <Post {...props} />} />
          <Route exact path="/login"
            render={(props) => <Login {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;