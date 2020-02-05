import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { getSingleRequest } from "../actions/requestActions";

// material ui
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    float: "right"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

function RequestCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const getRequest = id => {
    props.getSingleRequest(id);
  };

  const nextPage = useHistory();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {props.request.title}
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            {props.request.description}
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
            {props.request.ready_by}
          </Typography>
        </CardContent>
      </div>
      <Button
        className={classes.cover}
        variant="contained"
        color="secondary"
        onClick={() => {
          getRequest(props.request.id);
          nextPage.push("/requestDetails");
        }}
      >
        >
      </Button>
    </Card>
  );
}

export default connect(null, { getSingleRequest })(RequestCard);
