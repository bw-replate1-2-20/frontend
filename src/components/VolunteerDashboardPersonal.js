// GET ALL REQUESTS, REDER TO THE PAGE.
// PASS ACTIONS AS PROPS TO OTHER COMPONENTS

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import RequestList from "./RequestList";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import {axiosWithAuth} from '../utils/axiosWithAuth';

import {
  getRequests,
  updateRequest,
  deleteRequest
} from "../actions/requestActions";

const VolunteerDashboardPersonal = props => {

  useEffect(() => {
    props.getRequests(false);
  }, []);

  console.log(props.requests);
  return (
    <Container maxWidth="xs" justify="center" direction="column">
      <Grid>
        <h1>My Pickup Requests</h1>
    
     
          <RequestList
            key={props.id}
            requests={props.requests}
            id={props.id}
            getAll={false}
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
})(VolunteerDashboardPersonal);
