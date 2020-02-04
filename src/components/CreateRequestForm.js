import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// actions
import { createRequest } from "../actions/requestActions";

// material ui
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

//Date handling utility
import DateFnsUtils from "@date-io/date-fns";
//Material ui date pickers and utlity provider wrapper
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "@material-ui/pickers";

const CreateRequestForm = props => {
  const nextPage = useHistory();
  // Date change handler
  const [selectedTime, setSelectedTime] = useState(Date.now());
  const handleTimeChange = date => {
    setSelectedTime(Math.round(new Date(date).getTime()));
  };

  useEffect(() => {}, [selectedTime]);

  const { handleSubmit, register, error } = useForm();

  //Login action goes here
  const onSubmit = values => {
    const sendVals = {
      ...values,
      volunteer_id: null,
      delivered: null,
      picked_up: null,
      business_id: JSON.parse(localStorage.getItem("id")),
      ready_by: selectedTime
    };
    props.createRequest(sendVals);
    nextPage.push("/businessDashboard");
  };

  return (
    //Date and time is currently in unix timestamp format (ms)
    <Container maxWidth="xs">
      <Grid container justify="center" direction="column">
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

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              fullWidth
              disablePast
              margin="normal"
              id="date"
              label="Date"
              value={selectedTime}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <TimePicker
              fullWidth
              disablePast
              margin="normal"
              id="time"
              label="Time"
              value={selectedTime}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </MuiPickersUtilsProvider>

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
