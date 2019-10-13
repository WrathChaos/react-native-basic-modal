import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { buttonContainer, buttonTextStyle } from "./Button.style";

const Button = props => {
  const {
    backgroundColor,
    buttonComponent,
    buttonTextColor,
    buttonText,
    onPress
  } = props;
  return (
    buttonComponent || (
      <TouchableOpacity
        style={buttonContainer(backgroundColor)}
        onPress={onPress}
      >
        <Text style={buttonTextStyle(buttonTextColor)}>{buttonText}</Text>
      </TouchableOpacity>
    )
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonTextColor: PropTypes.string
};

Button.defaultProps = {
  buttonText: "NEXT",
  backgroundColor: "#895aaf",
  buttonTextColor: "#fff"
};

export default Button;
