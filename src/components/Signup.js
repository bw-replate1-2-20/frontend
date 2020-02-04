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


//validate on change function


const Signup = (props) => {

  const [isBusiness, setIsBusiness] = useState(false);


  //Validation schema had to move into function for conditional validation off of isBusiness on description and address fields
  const schema = yup.object().shape({
    name: yup.string().required(`Please enter a username.`),
    email: yup
      .string()
      .required(`Email is required.`)
      .email(`Please enter a valid email.`),
    password: yup.string().required(`Please enter a password.`).min(6, `Password must be at least six characters.`),
    phone: yup.string().required(`Please enter a valid phone number.`),
    address: isBusiness && yup.string().required(`Please enter an address.`),
    description: isBusiness && yup.string().required(`Please enter a description.`)
  });
  //Useform with yup validation schema above
  const { handleSubmit, register, errors, triggerValidation } = useForm({
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
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            inputRef={register}

            error={Boolean(errors.name)}
            helperText={errors.name && errors.name.message}
            onClick={async () => {
              triggerValidation("name");
            }}
            onChange={async () => {
              triggerValidation("name");
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
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
            onClick={async () => {
              triggerValidation("email");
            }}
            onChange={async () => {
              triggerValidation("email");
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

            error={Boolean(errors.password)}
            helperText={errors.password && errors.password.message}
            onClick={async () => {
              triggerValidation("password");
            }}
            onChange={async () => {
              triggerValidation("password");
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

              error={Boolean(errors.address)}
              helperText={errors.address && errors.address.message}
              onClick={async () => {
                triggerValidation("address");
              }}
              onChange={async () => {
                triggerValidation("address");
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

            error={Boolean(errors.phone)}
            helperText={errors.phone && errors.phone.message}
            onClick={async () => {
              triggerValidation("phone");
            }}
            onChange={async () => {
              triggerValidation("phone");
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

              error={Boolean(errors.description)}
              helperText={errors.description && errors.description.message}
              onClick={async () => {
                triggerValidation("description");
              }}
              onChange={async () => {
                triggerValidation("description");
              }}
            />
          )}
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
