import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

// actions
import { createRequest } from "../actions/requestActions";

// material ui
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const CreateRequestForm = props => {
  const { handleSubmit, register, error } = useForm();

  //Login action goes here
  const onSubmit = values => {
    const sendVals = { ...values, business_id: localStorage.getItem("id") };
    console.log(sendVals);
    props.createRequest(values);
  };

  return (
    //Reformatted forms with react useForm

    // values that need to be sent to the action
    // title (string)
    // description (string)
    // quantity (string)
    // ready_by (date and time)
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
            id="title"
            label="Title"
            name="title"
            
            inputRef={register}
          />
           <TextField
              label="Description"
              multiline
              rows="3"
              placeholder="Describe the food the volunteer will be picking up, as well as any other important details for when the volunteer arrives."
              variant="outlined"
              name="description"
              margin="normal"
              fullWidth
              inputRef={register}
            />
          <TextField
            variant="outlined"
            margin="normal"
            color="primary"
            required
            fullWidth
            name="quantity"
            label="Quantity"
            id="quantity"

            placeholder="How much food is it? Weight, volume, etc."
            
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
