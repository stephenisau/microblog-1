import React, { Component } from "react";
import Home from "./Home";
import NewPostFormContainer from "./containers/NewPostFormContainer";
import PostContainer from "./containers/PostContainer";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ErrorNotFound from "./ErrorNotFound";
import { connect } from "react-redux";
import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actions/actionTypes";

class Routes extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />}/>
          <Route exact path="/posts/:id"
            render={rtProps => {
              return (
                <PostContainer
                  {...rtProps} />
              );
            }}
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