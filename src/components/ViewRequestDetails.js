// RENDERING THROUGH PROPS, REQUEST DETAIL
// CONNECT TO STORE
// ABILITY TO UPDATE / DELETE REQUEST ID
import React from "react";
import { connect } from "react-redux";

// actions
import { updateRequest } from "../actions/requestActions";

// material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const ViewRequestDetails = props => {
  const nextPage = useHistory();
  console.log(props.request);
  const acceptRequest = () => {
    const payload = {
      ...props.request,
      volunteer_id: JSON.parse(localStorage.getItem("id"))
    };
    console.log("payload", payload);
    props.updateRequest(payload, props.request.id);
    nextPage.push("/volunteerDashboard");
  };

  const pickedUpRequest = () => {
    const payload = {
      ...props.request,
      picked_up: 1
    };
    console.log("payload", payload);
    props.updateRequest(payload, props.request.id);
    nextPage.push("/volunteerDashboard");
  };

  const completeRequest = () => {
    const payload = {
      ...props.request,
      delivered: 1
    };
    props.updateRequest(payload, props.request.id);
    nextPage.push("/volunteerDashboard");
  };

  console.log("are they the same?", props.id, props.request.volunteer_id);

  return (
    //Reformatted forms with react useForm

    // values that need to be sent to the action
    // title (string)
    // description (string)
    // quantity (string)
    // ready_by (date and time)
    <Container maxWidth="xs">
      <Grid justify="center" direction="column">
        <h2>{props.request.title}</h2>
        <p>quantity: {props.request.quantity}</p>
        <p>description: {props.request.description}</p>
        {!props.isBusiness &&
          !props.request.picked_up &&
          !props.request.volunteer_id && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                acceptRequest();
              }}
            >
              Accept Pickup Request
            </Button>
          )}
        {!props.isBusiness &&
          !props.request.picked_up &&
          props.request.volunteer_id && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                pickedUpRequest();
              }}
            >
              Request Has Been Picked Up
            </Button>
          )}
        {!props.isBusiness &&
          !props.request.delivered &&
          props.request.picked_up && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                completeRequest();
              }}
            >
              Completed Pickup Request
            </Button>
          )}
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    id: state.authReducer.id,
    request: state.requestReducer.singleRequest,
    isBusiness: state.authReducer.address
  };
};

export default connect(mapStateToProps, { updateRequest })(ViewRequestDetails);
