import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorNotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="errorMsg">Oops! That page can’t be found.</h1>
        <Link to="/">Back to Home </Link>
      </div>
    );
  }
}

export default ErrorNotFound;
