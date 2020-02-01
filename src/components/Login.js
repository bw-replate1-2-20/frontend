import React from "react";
import { connect } from "react-redux";

import { login } from "../actions/authActions";

const Login = () => {
  return (
    // user login form goes here
    // form distinguishes volunteers from businesses
    <h1>LOGIN FORM GOES HERE</h1>
  );
};

export default connect(null, { login })(Login);
