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

const Login = props => {
  
  const {handleSubmit, register, error} = useForm();

  //Login action goes here
  const onSubmit = values => {
    console.log(values)
  }

  return (
    //Reformatted forms with react useForm
    <Grid container component="main" justify="center">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px"
        }}
      >
        <Typography variant="h3" style={{ marginBottom: "15px", textAlign: "center"}}>
          Welcome<br/>Back
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="filled"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            style={{ margin: "15px 0", backgroundColor: "white" }}

            inputRef={register}
          />
          <TextField
            variant="filled"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{ margin: "15px 0", backgroundColor: "white" }}

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
      </div>
    </Grid>
  );
};

export default connect(null, { login })(Login);
