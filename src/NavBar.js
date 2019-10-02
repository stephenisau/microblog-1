import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <h1>Microblog</h1>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/new">
            Add New post
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
