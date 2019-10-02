import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul class="nav">
        <li class="nav-item">
          <h1>Microblog</h1>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">
            Blog
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">
            Add New post
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
