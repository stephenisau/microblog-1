import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../../actions/user';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  lastName: '',
  image: '',
};

const RegisterForm = (props) => {

  const [formData, setFormData] = useState(initialState);

  console.log("props in register form: ", props);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, email, password, passwordConfirmation, firstName, lastName, image } = formData;
    if (password !== passwordConfirmation) {
      // perform password validation here
    }
    register({ username, email, password, firstName, lastName, image });
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
          value={formData.email} />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
          value={formData.password} />
      </div>

      <div className="form-group">
        <label>Password confirmation: </label>
        <input
          className="form-control"
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          onChange={handleChange}
          required={true}
          value={formData.passwordConfirmation} />
      </div>

      <div className="form-group">
        <label>First Name: </label>
        <input
          className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.firstName} />
      </div>

      <div className="form-group">
        <label>Last Name: </label>
        <input
          className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.lastName} />
      </div>

      <div className="form-group">
        <label>Image Url(Optional): </label>
        <input
          className="form-control"
          id="image"
          name="image"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.lastName} />
      </div>

      <button className="btn btn-primary">Submit</button>

    </form>
  )
}

export default RegisterForm;