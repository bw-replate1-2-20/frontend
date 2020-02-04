import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { createRequest } from "../actions/requestActions";

// material ui
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const CreateRequestForm = props => {
  const [isBusiness, setIsBusiness] = useState(false);
  const { handleSubmit, register, error } = useForm();

  //Login action goes here
  const onSubmit = values => {
    props.createRequest(values);
  };

  return (
    //Reformatted forms with react useForm
    <Container maxWidth="xs">
      <Grid justify="center" direction="column">
        <h2>Create a Pickup Request</h2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="username"
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            color="primary"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "15px 0" }}
          >
            Done
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link href="/businessDashboard" variant="body2">
                Cancel
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default connect(null, { createRequest })(CreateRequestForm);
