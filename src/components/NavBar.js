import React from "react";
import { Link } from "react-router-dom";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Replate
          </Typography>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
          <Link to="/signup" className={classes.link}>
            Sign Up
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
