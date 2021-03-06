import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <header className="App-header jumbotron mt-5">
      <h1 className="App-title display-4">Microblog</h1>
      <p className="lead">Get in the Rithm of blogging!</p>
      <nav>
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
      </nav>
      {/* <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand >Brand</Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navbar> */}
    </header>
  )
}

export default Navigation;