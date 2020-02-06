// GET ALL UNIQUE BUSINESS REQUEST LIST, REDER TO THE PAGE.
// CREATE REQUEST FORM
// PASS ACTIONS AS PROPS TO OTHER COMPONENTS

import React, { useEffect, useDebugValue } from "react";
import { connect } from "react-redux";

import RequestList from "./RequestList";
/* import CreateRequestForm from "./CreateRequestForm" */

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import {
  getRequests,
  createRequest,
  deleteRequest
} from "../actions/requestActions";

const BusinessDashboard = props => {
  useEffect(() => {
    props.getRequests(true, localStorage.getItem("id"));
  }, []);

  return (
    <Container maxWidth="xs">
      <Grid justify="center" direction="column">
        <h1>My Requests</h1>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/createRequest"
          style={{ marginBottom: "20px" }}
        >
          Create Request
        </Button>
        <RequestList
          key={props.id}
          requests={props.requests}
          id={props.id}
          isBusiness={true}
        />
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
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
