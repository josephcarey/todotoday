import React from "react";
import PropTypes from "prop-types";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "36px",
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography variant="h2" component="h1" align="center">
        {props.text}
      </Typography>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
