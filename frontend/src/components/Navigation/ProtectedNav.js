import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'

const ProtectedNav = (props) => {


  return (
    <Navbar>
      <NavLink to="/new">Add a new post</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </Navbar>
  )
}

export default ProtectedNav;