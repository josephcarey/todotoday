import React from "react";
import PropTypes from "prop-types";

// Material-UI
import { Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <header>
      <Typography variant="h1">{props.text}</Typography>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
