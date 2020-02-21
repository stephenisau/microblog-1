import React, { Component } from "react";
import NewPost from "../containers/NewPost";
import { Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Post from "../containers/Post";
import './App.css';

import Home from "./Home";
import Routes from './Routes';


/** Overall blog application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

class App extends Component {
  render() {
    return (
      <div className="App container">

        <header className="App-header jumbotron mt-2">
          <h1 className="App-title display-4">Microblog</h1>
          <p className="lead">Get in the Rithm of blogging!</p>
          <nav>
            <NavLink exact to="/">Blog</NavLink>
            <NavLink exact to="/new">Add a new post</NavLink>
            <NavLink exact to="/login">Login</NavLink>
          </nav>
        </header>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

      </div>
    );
  }
}


export default App;