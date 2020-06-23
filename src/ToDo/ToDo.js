import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const ToDo = (props) => {
  // Hooks
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [currentlyEditingText, setCurrentlyEditingText] = useState("");

  //   Functions

  // Return
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" disableRipple />
      </ListItemIcon>
      <ListItemText primary={props.text} />
      {!currentlyEditing ? (
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => setCurrentlyEditing(true)}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      ) : (
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => props.deleteToDo(props.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => setCurrentlyEditing(false)}>
            <DoneIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
      {/* <button onClick={() => setCurrentlyEditing(!currentlyEditing)}>
        {currentlyEditing ? "Editing" : "Edit"}
      </button> */}
    </ListItem>
  );
};

ToDo.propTypes = {
  text: PropTypes.string,
};

export default ToDo;
