import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { login } from "../actions/authActions";

// material ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const Login = props => {

  const { handleSubmit, register, error } = useForm();

  //Login action goes here
  const onSubmit = values => {
    console.log(values)
  }

  return (
    //Reformatted forms with react useForm
    <Container maxWidth='xs'>
      <Grid justify="center" direction='column'>
        <Typography variant="h3" style={{ marginBottom: "15px", marginTop: "115px", textAlign: "center" }}>
          Welcome<br />Back
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="filled"
            color="primary"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            style={{ margin: "15px 0" }}

            inputRef={register}
          />
          <TextField
            variant="filled"
            color="primary"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{ margin: "15px 0" }}

            inputRef={register}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "15px 0" }}
          >
            Log In
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an Account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>

      </Grid>
    </Container>
  );
};

export default connect(null, { login })(Login);
