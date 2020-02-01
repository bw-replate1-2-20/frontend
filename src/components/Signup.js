import React from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

const Signup = () => {
  return (
    // user login form goes here
    // form distinguishes volunteers from businesses
    <h1>SIGNUP FORM GOES HERE</h1>
  );
};

export default connect(null, { signUp })(Signup);
