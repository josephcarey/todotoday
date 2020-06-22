import React from "react";
import PropTypes from "prop-types";

const ToDo = (props) => {
  return (
    <li>
      {props.currentlyEditing ? (
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
        </>
      ) : (
        <>
          {props.text}
          <button onClick={() => props.handleEditClick(props.id, props.text)}>
            Edit
          </button>
        </>
      )}
      <button onClick={() => props.handleDeleteClick(props.id)}>Delete</button>
    </li>
  );
};

ToDo.propTypes = {
  text: PropTypes.string,
};

export default ToDo;
