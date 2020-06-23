import React from "react";
import PropTypes from "prop-types";

import {} from "@material-ui/core";

const ToDoNormal = (props) => {
  return (
    <>
      {props.text}
      <button onClick={() => props.handleEditClick(props.id, props.text)}>
        Edit
      </button>
    </>
  );
};

ToDoNormal.propTypes = {
  text: PropTypes.string,
};

export default ToDoNormal;
