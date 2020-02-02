import React, { useState } from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

const Signup = () => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    // user sigup form goes here
    // form distinguishes volunteers from businesses
    // render extra form fields if user is a business

    // DEFINATELY DONT USE THE CODE BELOW (use it if you want, but by no means feel obligated)
    // MAKE YOUR OWN FOR WITH REACT-HOOK-FORM
    // AND STYLE IT ACCORDINGLY, THIS IS JUST PLACEHOLDER TO GET A FEEL FOR EVERYTHING
    //

    <Grid container component="main" justify="center">
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px"
        }}
        xs={12}
        sm={8}
        md={5}
      >
        <Typography variant="h4" style={{ marginBottom: "10px" }}>
          Sign Up
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
            label="Username"
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
            onChange={handleChange}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            onChange={handleChange}
          />
          <TextField
            label="Description"
            multiline
            rows="4"
            defaultValue="Business Description"
            variant="outlined"
            name="description"
            margin="normal"
            style={{ width: "100%" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ margin: "15px 0" }}
          >
            Sign Up
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link href="/signup" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default connect(null, { signUp })(Signup);
