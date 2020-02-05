// RENDERING THROUGH PROPS, REQUEST DETAIL
// CONNECT TO STORE
// ABILITY TO UPDATE / DELETE REQUEST ID
import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { updateRequest, deleteRequest } from "../actions/requestActions";

// material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Container, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const ViewRequestDetails = props => {
  const nextPage = useHistory();

  let offline = JSON.parse(localStorage.getItem("request"));

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

  const deleteRequest = () => {
    const payload = {
      ...props.request,
      delivered: 1
    };
    props.deleteRequest(payload, props.request.id);
    nextPage.push("/businessDashboard");
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
        <Typography variant="h6" align="center" style={{ marginTop: "27px" }}>
          {offline.title || props.request.title}
        </Typography>
        <Typography variant="subtitle1">Food Description:</Typography>
        <Typography variant="body2">
          {props.request.description || offline.description}
        </Typography>
        <Typography variant="subtitle1">Item Count:</Typography>
        <Typography variant="body2">
          {props.request.quantity || offline.quantity}
        </Typography>
        {(!localStorage.getItem("isBusiness") && !props.request.picked_up) ||
          (offline.picked_up && !props.request.volunteer_id) ||
          (offline.picked_up && (
            <Button
              fullWidth
              style={{ marginTop: "50px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                acceptRequest();
              }}
            >
              Accept Pickup Request
            </Button>
          ))}
        {(!localStorage.getItem("isBusiness") && !props.request.picked_up) ||
          (offline.description && props.request.volunteer_id) ||
          (offline.volunteer_id && (
            <Button
              fullWidth
              style={{ marginTop: "50px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                pickedUpRequest();
              }}
            >
              Mark as In-transit
            </Button>
          ))}
        {(!localStorage.getItem("isBusiness") && !props.request.delivered) ||
          (offline.delivered && props.request.picked_up) ||
          (offline.picked_up && (
            <Button
              fullWidth
              style={{ marginTop: "50px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                completeRequest();
              }}
            >
              Mark As Completed
            </Button>
          ))}
        {localStorage.getItem("isBusiness") && (
          <Button
            fullWidth
            style={{ marginTop: "50px" }}
            variant="contained"
            color="primary"
            onClick={() => {
              deleteRequest();
            }}
          >
            Delete Request
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

export default connect(mapStateToProps, { updateRequest, deleteRequest })(
  ViewRequestDetails
);
