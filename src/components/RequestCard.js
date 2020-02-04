import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { getSingleRequest } from "../actions/requestActions";

// material ui
import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function RequestCard(props) {
  const getRequest = id => {
    props.getSingleRequest(id);
  };

  const nextPage = useHistory();

  return (
    <Paper style={{ marginBottom: "30px" }}>
      <Typography variant="h5">{props.request.title}</Typography>
      <Typography variant="body1">{props.request.description}</Typography>
      <Typography variant="body1">{props.request.ready_by}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          getRequest(props.request.id);
          nextPage.push("/requestDetails");
        }}
      >
        View Details
      </Button>
    </Paper>
  );
}

export default connect(null, { getSingleRequest })(RequestCard);
