import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { login } from "../actions/authActions";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

const Login = props => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValue);
    props.login(formValue, props.history);
  };

  return (
    // user login form goes here
    // form distinguishes volunteers from businesses
    //

    // DEFINATELY DONT USE THE CODE BELOW (use it if you want, but by no means feel obligated)
    // MAKE YOUR OWN FOR WITH REACT-HOOK-FORM
    // AND STYLE IT ACCORDINGLY, THIS IS JUST PLACEHOLDER TO GET A FEEL FOR EVERYTHING
    //

    <Grid container component="main" justify="center">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px"
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "10px" }}>
          Log In
        </Typography>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            onChange={handleChange}
            autoComplete="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
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
