import React from "react";
import {
  StyleProp,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Button.style";

export interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ style, textStyle, text, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
