import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

// Material-UI
import {
  IconButton,
  Card,
  CardContent,
  CardHeader,
  List,
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 420,
    // backgroundColor: theme.palette.background.paper,
  },
});

// eslint-disable-next-line max-lines-per-function
const ToDoList = (props) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        title={props.title}
        subheader="subheader"
        titleTypographyProps={{ align: "center" }}
        subheaderTypographyProps={{ align: "center" }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <List>{props.children}</List>
      </CardContent>
    </Card>
  );
};

ToDoList.propTypes = {
  title: PropTypes.string,
};

export default ToDoList;
