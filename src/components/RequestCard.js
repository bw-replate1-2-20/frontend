import React from "react";

// material ui
import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Request(props) {
  return (
    <Paper style={{ marginBottom: "30px" }}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Typography variant="body1">{props.ready_by}</Typography>
      <Button variant="contained" color="secondary">
        View Details
      </Button>
    </Paper>
  );
}
