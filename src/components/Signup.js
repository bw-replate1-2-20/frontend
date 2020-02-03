import React, { useState } from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

//React form
import {useForm} from 'react-hook-form';

//For navigating to login page after signup button click
import {useHistory} from 'react-router-dom';


// material ui
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const Signup = () => {
  
  const [isBusiness, setIsBusiness] = useState(false);

  let history = useHistory()
  const { handleSubmit, register, error } = useForm();

  //Signup action goes here
  const onSubmit = values => {
    console.log(values)
  }

  return (
   

    <Container maxWidth='xs'>
      <Grid container justify="center" direction='column' style={{ margin: '20px 0' }}>
        
        <Typography variant="h4" style={{ marginBottom: "10px", textAlign: 'center' }}>
          Sign Up
        </Typography>

        <ButtonGroup fullWidth variant='contained'>
          <Button
          color={isBusiness ? 'default' : 'primary'}
          onClick={() => {setIsBusiness(false)}}>
            Volunteer
          </Button>
          <Button
          color={isBusiness ? 'primary' : 'default'}
          onClick={() => {setIsBusiness(true)}}
          >
            Business
          </Button>
        </ButtonGroup>


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
         {isBusiness && <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location"
            autoComplete="current-password"

            inputRef={register}
          />}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"

            inputRef={register}
          />
          {isBusiness && <TextField
            label="Description"
            multiline
            rows="3"
            placeholder="A brief description of your business or organization."
            variant="outlined"
            name="description"
            margin="normal"
            style={{ width: "100%" }}

            inputRef={register}
          />}
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
