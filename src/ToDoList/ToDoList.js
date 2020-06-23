import React from "react";
import PropTypes from "prop-types";

// Material-UI
import { Card, List, Typography } from "@material-ui/core";

const ToDoList = (props) => {
  return (
    <Card>
      <Typography variant="h2">{props.title}</Typography>
      <List>{props.children}</List>
    </Card>
  );
};

ToDoList.propTypes = {
  title: PropTypes.string,
};

export default ToDoList;
