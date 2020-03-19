import React, { useState } from 'react';
import useSetState from '../util/hooks/useSetState';
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const Login = (props) => {

  const [state, setState] = useSetState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    clear();
  }

  const handleChange = (evt) => {
    setState({
      [evt.target.name]: evt.target.value
    });
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      <form>
        <label>
          Username: <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            required={true}
            value={state.username}
          />
        </label>
        <label>
          Email: <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            required={true}
            value={state.email}
          />
        </label>
        <label>
          Password: <input
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            required={true}
            value={state.password}
          />
        </label>
        <label>
          Password confirmation: <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="text"
            onChange={handleChange}
            required={true}
            value={state.passwordConfirmation}
          />
        </label>
        <button onClick={handleSubmit}/>
      </form>
    </>
    // <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    //   <div class="modal-dialog" role="document">
    //     <div class="modal-content">
    //       <div class="modal-header text-center">
    //         <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true"></span>
    //         </button>
    //       </div>
    //       <div class="modal-body mx-3">
    //         <div class="md-form mb-5">
    //           <i class="fas fa-envelope prefix grey-text"></i>
    //           <input type="email" id="defaultForm-email" class="form-control validate" />
    //           <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
    //         </div>

    //         <div class="md-form mb-4">
    //           <i class="fas fa-lock prefix grey-text"></i>
    //           <input type="password" id="defaultForm-pass" class="form-control validate" />
    //           <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
    //         </div>

    //       </div>
    //       <div class="modal-footer d-flex justify-content-center">
    //         <button class="btn btn-default">Login</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )

}
export default Login;