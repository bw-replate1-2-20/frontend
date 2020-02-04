import React from "react";

// material ui
import { Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    backgroundColor: "#fff",
    color: "gray",
    marginLeft: "20px",
    padding: "3px 20px",
    textDecoration: "none"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="md">
          <Grid>
            <Toolbar>
              <Typography variant="h4" className={classes.title}>
                Replate
              </Typography>
              <Button href="/login" color="inherit">
                login
              </Button>
            </Toolbar>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
}
