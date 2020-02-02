import React, { useState } from "react";
import { connect } from "react-redux";

import {
  getRequests,
  createRequest,
  deleteRequest
} from "../actions/requestActions";

const BusinessDashboard = props => {
  return <h1>Business Dashboard Component</h1>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    id: state.authReducer.id,
    requests: state.requestReducer.requests
  };
};

export default connect(mapStateToProps, {
  getRequests,
  createRequest,
  deleteRequest
})(BusinessDashboard);
