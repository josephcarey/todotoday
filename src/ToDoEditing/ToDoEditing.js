import React from "react";
import PropTypes from "prop-types";

import {} from "@material-ui/core";

const ToDoEditing = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.currentlyEditingText}
        onChange={(e) => props.setCurrentlyEditingText(e.target.value)}
      />
      <button
        onClick={() =>
          props.handleSaveClick(props.id, props.currentlyEditingText)
        }
      >
        Save
      </button>
      <button onClick={() => props.handleDeleteClick(props.id)}>Delete</button>
    </>
  );
};

ToDoEditing.propTypes = {
  text: PropTypes.string,
};

export default ToDoEditing;
