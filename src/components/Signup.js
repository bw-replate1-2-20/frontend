import React, { useState } from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

//React form
import {useForm} from 'react-hook-form';

//For linking after signup button click
import {useHistory} from 'react-router-dom';


// material ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const Signup = () => {
  
  let history = useHistory()
  const { handleSubmit, register, error } = useForm();

  //Signup action goes here
  const onSubmit = values => {
    console.log(values)
    history.push('/login')
  }

  return (
   

    <Container maxWidth='xs'>
      <Grid container justify="center" direction='column' style={{ margin: '50px 0' }}>

        <Typography variant="h4" style={{ marginBottom: "10px", textAlign: 'center' }}>
          Sign Up
        </Typography>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"

            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location"
            autoComplete="current-password"

            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"

            inputRef={register}
          />
          <TextField
            label="Description"
            multiline
            rows="4"
            placeholder="A brief description of your business or organization."
            variant="outlined"
            name="description"
            margin="normal"
            style={{ width: "100%" }}

            inputRef={register}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "15px 0" }}
          >
            Sign Up
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>

    </Container>
  );
};

export default connect(null, { signUp })(Signup);
