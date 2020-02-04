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
    props.updateRequest();
  };

  const completeRequest = () => {
    props.updateRequest();
  };

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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            acceptRequest();
          }}
        >
          Accept Pickup Request
        </Button>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    request: state.requestReducer.singleRequest
  };
};

export default connect(mapStateToProps, { updateRequest })(ViewRequestDetails);
