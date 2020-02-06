import React, { useState } from "react";

import { connect } from "react-redux";

import { Link as RouteLink } from "react-router-dom";


// material ui
import { Container, Drawer } from "@material-ui/core";

import Hidden from "@material-ui/core/Hidden";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { useHistory } from "react-router-dom";


function NavBar(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <Drawer open={drawerOpen} PaperProps={{ style: { width: "100%" } }}>

        <Grid container direction='row'>
        <IconButton onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}>
          <CloseIcon fontSize='large'/>
        </IconButton>
        </Grid>
        {/* Volunteer navigation in drawer */}
        {!Boolean(JSON.parse(localStorage.getItem("isBusiness"))) && <>


        <List component="nav">
            <ListItem button component={RouteLink} to="/volunteerDashboardAll" onClick={() => {
              setDrawerOpen(false);
            }}>
              All Available Pickups
          </ListItem>
            <ListItem button component={RouteLink} to="/volunteerDashboardPersonal" onClick={() => {
              setDrawerOpen(false);
            }}>
             Accepted Pickups
          </ListItem>
          </List>

        </>}

        {/* Business navigation links in drawer */}
        {Boolean(JSON.parse(localStorage.getItem("isBusiness"))) && <>

          <List component="nav">
            <ListItem button component={RouteLink} to="/businessDashboard" onClick={() => {
              setDrawerOpen(false);
            }}>
              Open Pickup Requests
          </ListItem>
            <ListItem button component={RouteLink} to="/analytics" activeClassName="Mui-Selected" onClick={() => {
              setDrawerOpen(false);
            }}>
              Pickup Request Analytics
          </ListItem>
          </List>
        </>}
      </Drawer>




      <AppBar position="static" color="secondary">

        <Toolbar>
          <Grid container direction="row" alignItems='center' justify='space-between'>

            <Hidden mdUp>
              <IconButton aria-label="navigation" onClick={() => { setDrawerOpen(!drawerOpen) }} style={{ color: "#fff" }}>
                <Menu fontSize='large' />
              </IconButton>
            </Hidden>

            <Typography variant="h1" >
              Replate
                </Typography>




            <span>
            <Hidden smDown>
              
                <Button component={RouteLink} style={{ color: "#fff" }} to="/businessDashboard" exact>
                  My Requests
                </Button>
                <Button component={RouteLink} style={{ color: "#fff" }} to="/analytics">
                  Analytics
              </Button>
             
            </Hidden>


            {localStorage.getItem("id") && (
              <Button
                style={{ color: "#fff" }}
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                }}
              >
                Logout
                  </Button>
            )}
            </span>

          </Grid>

        </Toolbar>

      </AppBar>
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
