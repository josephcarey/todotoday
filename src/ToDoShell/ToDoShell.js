import React from "react";
import PropTypes from "prop-types";

import { ListItem } from "@material-ui/core";

const TToDoShell = (props) => {
  return <ListItem>{props.children}</ListItem>;
};

TToDoShell.propTypes = {
  text: PropTypes.string,
};

export default TToDoShell;
