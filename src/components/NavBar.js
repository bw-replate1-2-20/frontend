import React, { useState } from "react";

import { connect } from "react-redux";

// material ui
import { Container, Drawer } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import { Link as RouterLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

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


function NavBar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = useHistory();

  return (

    <>

    <Drawer open={drawerOpen} PaperProps={{style: {width: '100%'}}}>
    <Button color='primary' variant='contained' onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}>Drawer</Button>
    </Drawer>

    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="md">
          <Grid>
            <Toolbar>
              <Typography variant="h4" className={classes.title}>
                Replate
              </Typography>
              <Button color='primary' variant='contained' onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}>Drawer</Button>
              {localStorage.getItem("id") && (
                <Button
                  onClick={() => {
                    localStorage.clear();
                    logout.push("/");
                  }}
                >
                  Logout
                </Button>
              )}
            </Toolbar>
          </Grid>
        </Container>
      </AppBar>
    </div>


    </>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    id: state.authReducer.id
  };
};

export default connect(mapStateToProps, {})(NavBar);
