import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Microblog</h1>
          <div className="d-flex justify-content-center">
            <p className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Blog
              </NavLink>
            </p>
            <p className="nav-item">
              <NavLink className="nav-link" exact to="/new">
                Add New post
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
