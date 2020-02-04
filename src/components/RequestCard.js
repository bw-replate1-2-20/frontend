import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function Request(props) {
  return (
    <Paper>
      <Typography variant="h3">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Typography variant="body1">{props.ready_by}</Typography>
    </Paper>
  );
}
