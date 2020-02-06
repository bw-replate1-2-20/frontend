import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

//React form
import { useForm } from "react-hook-form";
// yup for validation scheme
import * as yup from "yup";

// material ui
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

//validate on change function

const Signup = props => {
  const [isBusiness, setIsBusiness] = useState(false);


  //Booleans for whether the user has touched various fields for use with form validation
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);

  //Booleans for use with login error message display
  const [hasFetched, setHasFetched] = useState(false);
  const [signupError, setSignupError] = useState(false);

  useEffect(() => {
    if (props.isFetching) {
      setHasFetched(true)
    }
  }, [props.isFetching])
  useEffect(() => {
    if (hasFetched) {
      setSignupError(true)
    }
    else {
      setSignupError(false)
    }
  }, [hasFetched])


  //Validation schema had to move into function for conditional validation off of isBusiness on description and address fields
  const schema = yup.object().shape({
    name: yup.string().required(`Please enter a username.`),
    email: yup
      .string()
      .required(`Email is required.`)
      .email(`Please enter a valid email.`),
    password: yup
      .string()
      .required(`Please enter a password.`)
      .min(6, `Password must be at least six characters.`),
    phone: yup
      .string()
      .required(`Please enter a valid phone number.`),
    address: isBusiness && yup.string().required(`Please enter an address.`),
    description: isBusiness && yup.string().required(`Please enter a description.`)
  });

  //Useform with yup validation schema above
  const { handleSubmit, register, errors, triggerValidation, setValue } = useForm({
    validationSchema: schema
  });

  //Signup action
  const onSubmit = values => {
    props.signUp(values, props.history, isBusiness);
  };

  return (
    <Container maxWidth="xs">
      <Grid
        container
        justify="center"
        direction="column"
        style={{ marginTop: "25px" }}
      >
        <Typography
          variant="h4"
          style={{ marginBottom: "10px", textAlign: "center" }}
        >
          Sign Up
        </Typography>

      

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

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


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            inputRef={register}
            error={(!props.isFetching && signupError) || Boolean(errors.name)}
            helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.name && errors.name.message) || (nameTouched && "Looks good.")}
            onClick={async () => {
              triggerValidation("name");
              setNameTouched(true);
              setHasFetched(false)
            }}
            onChange={async () => {
              triggerValidation("name");
              setNameTouched(true);
              setHasFetched(false)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            inputRef={register}
            error={(!props.isFetching && signupError) || Boolean(errors.email)}
            helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.email && errors.email.message) || (emailTouched && "Valid email.")}
            onClick={async () => {
              triggerValidation("email");
              setEmailTouched(true);
              setHasFetched(false)
            }}
            onChange={async () => {
              triggerValidation("email");
              setEmailTouched(true);
              setHasFetched(false)
            }}
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
            error={(!props.isFetching && signupError) || Boolean(errors.password)}
            helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.password && errors.password.message) || (passwordTouched && "Awesome password.")}
            onClick={async () => {
              triggerValidation("password");
              setPasswordTouched(true);
            }}
            onChange={async () => {
              triggerValidation("password");
              setPasswordTouched(true);
              setHasFetched(false)

            }}
          />
          {isBusiness && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              autoComplete="street-address"
              inputRef={register}
              error={(!props.isFetching && signupError) || Boolean(errors.address)}
              helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.address && errors.address.message) || (addressTouched && "Checks out.")}
              onClick={async () => {
                triggerValidation("address");
                setAddressTouched(true);
                setHasFetched(false)
              }}
              onChange={async () => {
                triggerValidation("address");
                setAddressTouched(true);
                setHasFetched(false)

              }}
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            inputRef={register}
            error={(!props.isFetching && signupError) || Boolean(errors.phone)}
            helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.phone && errors.phone.message) || (phoneTouched && "Valid phone number.")}
            onClick={async () => {
              triggerValidation("phone");
              setPhoneTouched(true);
              setHasFetched(false)
            }}
            onChange={async () => {
              triggerValidation("phone");
              setPhoneTouched(true);
              setHasFetched(false)
            }}
          />
          {isBusiness && (
            <TextField
              label="Description"
              multiline
              rows="3"
              placeholder="A brief description of your business or organization."
              variant="outlined"
              name="description"
              margin="normal"
              style={{ width: "100%" }}
              inputRef={register}
              error={(!props.isFetching && signupError) || Boolean(errors.description)}
              helperText={(!props.isFetching && signupError && "Signup failed.") || (errors.description && errors.description.message) || (descriptionTouched && "Looks good.")}
              onClick={async () => {
                triggerValidation("description");
                setDescriptionTouched(true);
              }}
              onChange={async () => {
                triggerValidation("description");
                setDescriptionTouched(true);
                setHasFetched(false)
              }}
            />
          )}
          <Button
            disabled={(isBusiness && !descriptionTouched) || (isBusiness && !addressTouched) || props.isFetching || hasFetched || !emailTouched || !passwordTouched || Boolean(errors.email) || Boolean(errors.password) || Boolean(errors.phone) || Boolean(errors.description) || Boolean(errors.address)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "15px 0" }}
          >
            {(props.isFetching && "Signing up") || "Sign Up"}
          </Button>
          <br />
          <Grid container justify="center">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Log In
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
    isFetching: state.authReducer.isFetching
  };
};


export default connect(mapStateToProps, { signUp })(Signup);
