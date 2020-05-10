import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
function Button(props) {
  return (
    <button type="submit" className="btn btn-dark btn-block custom-button">{props.name}</button>
  );
}

export default Button;