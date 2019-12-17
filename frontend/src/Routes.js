import React, { Component } from "react";
import Home from "./Home";
import NewPostFormContainer from "./containers/NewPostFormContainer";
import PostDetail from "./containers/PostDetail";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ErrorNotFound from "./ErrorNotFound";
import { connect } from "react-redux";
import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actions/actionTypes";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />}/>
          <Route exact path="/posts/:id"
            render={rtProps => <PostDetail {...rtProps} /> }
          />
          <Route exact path="/new"
            render={rtProps => (
              <NewPostFormContainer
                post={{}}
                edit={false}
                {...rtProps} />
            )} />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;