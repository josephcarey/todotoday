import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

// eslint-disable-next-line max-lines-per-function
const ToDoAdd = (props) => {
  // Hooks
  const [newToDoText, setNewToDoText] = useState("");

  // Functions
  const finishAdd = (addText) => {
    props.addToDo(addText);
    setNewToDoText("");
  };

  // Return
  return (
    <ListItem>
      <ListItemIcon>
        {/* <Checkbox edge="start" disableRipple /> */}
      </ListItemIcon>
      <ListItemText>
        <TextField
          value={newToDoText}
          onChange={(e) => setNewToDoText(e.target.value)}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => finishAdd(newToDoText)}>
          <AddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ToDoAdd.propTypes = {
  addToDo: PropTypes.func,
};

export default ToDoAdd;
