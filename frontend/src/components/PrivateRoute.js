import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Private = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} render={(rtProps) => {
    return (loggedIn ? <Component {...rtProps} {...rest} /> : <Redirect to="/login" />)
  }} />
)


export const PrivateRoute = withRouter(Private);