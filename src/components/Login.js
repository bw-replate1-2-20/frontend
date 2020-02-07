import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";


//Form validation and scheme
import { useForm } from "react-hook-form";
import * as yup from 'yup';

// material ui
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

const Login = props => {
  const [isBusiness, setIsBusiness] = useState(false);

  //Form validation and scheme
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [hasFetched, setHasFetched] = useState(false);
  const [loginError, setLoginError] = useState(false);

  //
  useEffect(() => {
    if (props.isFetching) {
      setHasFetched(true)
    }
  }, [props.isFetching])
  useEffect(() => {
    if (hasFetched) {
      setLoginError(true)
    }
    else {
      setLoginError(false)
    }
  }, [hasFetched])

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(`Please enter your email.`)
      .email(`Please enter a valid email.`),
    password: yup
      .string()
      .required(`Please enter your password.`)
      .min(4, "Password is at least four characters.")
  });
  const { handleSubmit, register, errors, triggerValidation} = useForm({
    validationSchema: schema
  });


  //Login action goes here
  const onSubmit = values => {
    props.login(values, props.history, isBusiness);
  };

  return (
    //Reformatted forms with react useForm
    <Container maxWidth="xs">
  
      <Grid justify="center" direction="column" >
        <Typography
          variant="h1"
          style={{
            marginBottom: "15px",
            marginTop: "115px",
            textAlign: "center"
          }}
        >
          Welcome
          <br />
          Back
        </Typography>

        <ButtonGroup fullWidth variant="contained">
          <Button
            color={isBusiness ? "default" : "primary"}
            onClick={() => {
              setIsBusiness(false);
            }}
          >
            Volunteer
          </Button>
          <Button
            color={isBusiness ? "primary" : "default"}
            onClick={() => {
              setIsBusiness(true);
            }}
          >
            Business
          </Button>
        </ButtonGroup>

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

            onClick={async () => {
              
              triggerValidation("email");
              setEmailTouched(true);
            
            }}
            onChange={async () => {
              
              triggerValidation("email");
              setEmailTouched(true);
              setHasFetched(false)
             
            }}

            error={ (!props.isFetching && loginError) || Boolean(errors.email)}
            helperText={(!props.isFetching && loginError && "Login failed." ) || (errors.email && errors.email.message) || (emailTouched && "Looks good.")}
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

            onClick={async () => {
              
              triggerValidation("password");
              setPasswordTouched(true);
            
            }}
            onChange={async () => {
              
              triggerValidation("password");
              setPasswordTouched(true);
              setHasFetched(false)
             
            }}

            error={(!props.isFetching && loginError) || Boolean(errors.password)}
            helperText={(!props.isFetching && loginError && "Email or password is incorrect." ) || (errors.password && errors.password.message) || (passwordTouched && "Nice.")}
          />
          <Button
            disabled={props.isFetching || hasFetched || !emailTouched || !passwordTouched || errors.email || errors.password}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "15px 0" }}
          >
            {props.isFetching && "Logging In" || "Log In"}
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                Don't have an Account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};


const mapStateToProps = state => {
  return {
    isFetching : state.authReducer.isFetching 
  };
};

export default connect(mapStateToProps, { login })(Login);
