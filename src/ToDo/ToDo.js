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

// eslint-disable-next-line max-lines-per-function
const ToDo = (props) => {
  // Hooks
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [currentlyEditingText, setCurrentlyEditingText] = useState("");

  //   Functions
  const startEditing = (originalText) => {
    setCurrentlyEditingText(originalText);
    setCurrentlyEditing(true);
  };

  const finishEditing = (todo, editText) => {
    if (editText !== todo.text) {
      const editedToDo = {
        ...todo,
        text: editText,
      };
      props.editToDo(editedToDo);
    }
    setCurrentlyEditing(false);
  };

  const toggleChecked = (todo) => {
    const editedToDo = {
      ...todo,
      is_completed: !todo.is_completed,
    };
    props.editToDo(editedToDo);
  };

  // Return
  return (
    <ListItem>
      {/* Checkbox */}
      <ListItemIcon>
        <Checkbox
          edge="start"
          disableRipple
          checked={props.todo.is_completed}
          onClick={() => toggleChecked(props.todo)}
        />
      </ListItemIcon>
      {/* Text */}
      {!currentlyEditing ? (
        // Not Editing
        <ListItemText primary={props.todo.text} />
      ) : (
        // Editing
        <ListItemText>
          <TextField
            value={currentlyEditingText}
            onChange={(e) => setCurrentlyEditingText(e.target.value)}
          />
        </ListItemText>
      )}
      {/* End Buttons */}
      {!currentlyEditing ? (
        // Not Editing
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => startEditing(props.todo.text)}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      ) : (
        // Editing
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={() => props.deleteToDo(props.todo.id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => finishEditing(props.todo, currentlyEditingText)}
          >
            <DoneIcon />
          </IconButton>
        </ListItemSecondaryAction>
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
