import React from "react";
import {TextField} from "@material-ui/core";
import PropTypes from "prop-types";

const SearchTextField = props => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      className={props.className}
      size={props.size}
      onChange={props.onChange} 
    />
  );
};

SearchTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default SearchTextField;
