import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../../actions/user';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const RegisterForm = (props) => {

  const [formData, setFormData] = useState(initialState);

  console.log("props in register form: ", props);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, email, password, passwordConfirmation } = formData;
    if (password !== passwordConfirmation) // perform password validation here
    register({ username, email, password, passwordConfirmation });
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
    <form onClick={handleSubmit}>
      <div className="form-group">
        <label>Username: </label>
         <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.username}
          />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.email}
          />
      </div>
      <div className="form-group">
        <label>Password:</label> 
        <input
            className="form-control"
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.password}
          />
      </div>
      <div className="form-group">
        <label>Password confirmation: </label>
         <input
            className="form-control"
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.passwordConfirmation}
          />
      </div>

      <button className="btn btn-primary">Submit</button>

    </form>
  )
}

export default RegisterForm;