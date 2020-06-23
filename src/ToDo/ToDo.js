import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const ToDo = (props) => {
  // Hooks
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [currentlyEditingText, setCurrentlyEditingText] = useState("");

  //   Functions
  const startEditing = (originalText) => {
    setCurrentlyEditingText(originalText);
    setCurrentlyEditing(true);
  };

  const finishEditing = (id, originalText, editText) => {
    if (editText !== originalText) {
      props.editToDo(id, editText);
    }
    setCurrentlyEditing(false);
  };

  // Return
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" disableRipple />
      </ListItemIcon>
      {/* If we are not editing */}
      {!currentlyEditing ? (
        <>
          <ListItemText primary={props.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => startEditing(props.text)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        // If we are editing
        <>
          <ListItemText>
            <TextField
              value={currentlyEditingText}
              onChange={(e) => setCurrentlyEditingText(e.target.value)}
            />
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => props.deleteToDo(props.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              edge="end"
              onClick={() =>
                finishEditing(props.id, props.text, currentlyEditingText)
              }
            >
              <DoneIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

ToDo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  editToDo: PropTypes.func,
  deleteToDo: PropTypes.func,
};

export default ToDo;
