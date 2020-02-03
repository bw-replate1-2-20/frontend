// GET ALL UNIQUE BUSINESS REQUEST LIST, REDER TO THE PAGE.
// CREATE REQUEST FORM
// PASS ACTIONS AS PROPS TO OTHER COMPONENTS

import React, { useEffect, useDebugValue } from "react";
import { connect } from "react-redux";

/* import RequestList from "./RequestList" */
/* import CreateRequestForm from "./CreateRequestForm" */

import {
  getRequests,
  createRequest,
  deleteRequest
} from "../actions/requestActions";

const BusinessDashboard = props => {
  useEffect(() => {
    props.getRequests(props.location);
  }, []);

  return <h1>Business Dashboard Component</h1>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    id: state.authReducer.id,
    location: state.authReducer.location,
    requests: state.requestReducer.requests
  };
};

export default connect(mapStateToProps, {
  getRequests,
  createRequest,
  deleteRequest
})(BusinessDashboard);
