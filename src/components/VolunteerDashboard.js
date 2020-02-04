// GET ALL REQUESTS, REDER TO THE PAGE.
// PASS ACTIONS AS PROPS TO OTHER COMPONENTS

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import RequestList from "./RequestList";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
  getRequests,
  updateRequest,
  deleteRequest
} from "../actions/requestActions";

const VolunteerDashboard = props => {
  console.log("in Volunteer Dashboard props.requests:", props.requests);
  useEffect(() => {
    props.getRequests(false);
  }, []);

  return (
    <Container maxWidth="xs">
      <Grid justify="center" direction="column">
        <h1>Pickup Requests</h1>
        <RequestList
          requests={props.requests}
          id={props.id}
          isBusiness={false}
        />
      </Grid>
    </Container>
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
