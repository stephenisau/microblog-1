import React, { useState } from 'react'
import "./LoginForm.css";

export const LoginForm = ({ currUser }) => {
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.handleChange}
              className="form-control"
              type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
              className="form-control" />
          </div>
          <button className="btn btn-primary mt-2" type="submit">Submit</button>
          <button className="btn btn-info mt-2 ml-2" type="button" onClick={this.demoLogin}> Demo </button>
        </form>
      </div>
    </div>
  )
}