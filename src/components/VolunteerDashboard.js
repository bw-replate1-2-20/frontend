// GET ALL REQUESTS, REDER TO THE PAGE.
// PASS ACTIONS AS PROPS TO OTHER COMPONENTS

import React, { useState } from "react";
import { connect } from "react-redux";

/* import RequestList from "./RequestList" */

import {
  getRequests,
  updateRequest,
  deleteRequest
} from "../actions/requestActions";

const VolunteerDashboard = props => {
  return <h1>Volunteer Dashboard Component</h1>;
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
  updateRequest,
  deleteRequest
})(VolunteerDashboard);
