import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="App-header jumbotron mt-2">
      <h1 className="App-title display-4">Microblog</h1>
      <p className="lead">Get in the Rithm of blogging!</p>
      <nav>
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
        <NavLink exact to="/login">Login</NavLink>
      </nav>
    </header>
  )
}

export default Navigation;