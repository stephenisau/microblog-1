import axios from 'axios';
import { LOGIN, LOGOUT, REGISTER_USER, LOADED } from "./types";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


// getUserFromAPI, loginUser, registerUser
export function getUserFromAPI(username) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return dispatch(getUser(response.data));
  };
};

const getUser = (user) => {
  return {
    type: LOADED,
    payload: { user }
  };
};

export function register(userInfo) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/users/register`);
    return dispatch(registerUser(response.data));
  }
}

const registerUser = (token) => {
  return {
    type: REGISTER_USER,
    payload: { token }
  }
}

export function login({ username, password }) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/users/login`);
    return dispatch(loginUser(response.data));
  }
}

const loginUser = (token) => {
  return {
    type: LOGIN,
    payload: { token }
  };
};