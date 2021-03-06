import React, { useState } from 'react';
import "./LoginForm.css";


const initialState = {
  username: '',
  password: '',
}

const LoginForm = ({ login }) => {

  const [formData, setFormData] = useState(initialState);

  console.log("props in loginform: ", LoginForm);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, password } = formData;
    login({ username, password });
    clear();
  }


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const clear = () => {
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
          className="form-control"
          type="text" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          className="form-control" />
      </div>
      <button className="btn btn-primary mt-2" type="submit">Submit</button>
    </form>
  )
}

export default LoginForm;