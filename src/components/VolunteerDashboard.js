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
  useEffect(() => {
    props.getRequests(false);
  }, []);

  return (
    <div>
      <h1>Volunteer Dashboard Component</h1>
      <RequestList request={props.requests} id={props.id} isBusiness={false} />
    </div>
  );
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
