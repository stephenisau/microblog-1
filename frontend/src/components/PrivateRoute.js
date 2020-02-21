// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect, Route, withRouter } from 'react-router-dom';

// const Private = ({ component: Component, ...rest }) => {
//   <Route {...rest} render={(rtProps) => {
//     return (rest.currUser ? <Component {...rtProps} {...rest} /> : <Redirect to="/login" />)
//   }} />
// }

// const mapStateToProps = (state, prevProps) => (
//   { currUser: state.currUser,
//     isLoading: state.isLoading,
//     errors: state.errors }
// )


// export const PrivateRoute = withRouter(connect(mapStateToProps, null)(Private));