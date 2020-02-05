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

import {
  getRequests,
  updateRequest,
  deleteRequest
} from "../actions/requestActions";

const VolunteerDashboard = props => {
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    props.getRequests(false);
  }, [showAll]);

  console.log(props.requests);
  return (
    <Container maxWidth="xs" justify="center" direction="column">
      <Grid>
        <h1>Pickup Requests</h1>
        <ButtonGroup
          fullWidth
          variant="contained"
          style={{ marginBottom: "20px" }}
        >
          <Button
            color={showAll ? "primary" : "default"}
            onClick={() => {
              setShowAll(true);
            }}
          >
            All Pickups
          </Button>
          <Button
            color={showAll ? "default" : "primary"}
            onClick={() => {
              setShowAll(false);
            }}
          >
            My Pickups
          </Button>
        </ButtonGroup>
        {showAll && (
          <RequestList
            key={props.id}
            requests={props.requests}
            id={props.id}
            getAll={true}
            isBusiness={false}
          />
        )}
        {!showAll && (
          <RequestList
            key={props.id}
            requests={props.requests}
            id={props.id}
            getAll={false}
            isBusiness={false}
          />
        )}
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
