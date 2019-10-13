import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import Button from "./components/Button/Button";
import styles, { container, _titleStyle, _descStyle } from "./BasicModal.style";

const BasicModal = props => {
  const {
    width,
    title,
    height,
    isVisible,
    descStyle,
    descColor,
    titleColor,
    titleStyle,
    description,
    backgroundColor,
    firstButtonText,
    secondButtonText,
    firstButtonOnPress,
    secondButtonOnPress,
    firstButtonTextColor,
    firstButtonComponent,
    secondButtonTextColor,
    secondButtonComponent,
    firstButtonBackgroundColor,
    secondButtonBackgroundColor
  } = props;
  return (
    <Modal
      style={styles.modalContainer}
      isVisible={isVisible}
      onBackdropPress={() => setVisibility(false)}
    >
      <View style={container(height, width, backgroundColor)}>
        <View style={styles.containerGlue}>
          <Text style={titleStyle || _titleStyle(titleColor)}>{title}</Text>
          <Text style={descStyle || _descStyle(descColor)}>{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.firstButtonContainer}>
            <Button
              buttonText={firstButtonText}
              onPress={firstButtonOnPress}
              buttonComponent={firstButtonComponent}
              buttonTextColor={firstButtonTextColor}
              backgroundColor={firstButtonBackgroundColor}
            />
          </View>
          <Button
            buttonText={secondButtonText}
            onPress={secondButtonOnPress}
            buttonComponent={secondButtonComponent}
            buttonTextColor={secondButtonTextColor}
            backgroundColor={secondButtonBackgroundColor}
          />
        </View>
      </View>
    </Modal>
  );
};

BasicModal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  descColor: PropTypes.string,
  titleColor: PropTypes.string,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string,
  firstButtonTextColor: PropTypes.string,
  secondButtonTextColor: PropTypes.string,
  firstButtonBackgroundColor: PropTypes.string,
  secondButtonBackgroundColor: PropTypes.string
};

BasicModal.defaultProps = {
  width: "90%",
  height: 185,
  isVisible: false,
  title: "Hold on!",
  descColor: "#b5b5b5",
  titleColor: "#212121",
  backgroundColor: "#fff",
  firstButtonText: "SKIP",
  secondButtonText: "NEXT",
  firstButtonTextColor: "#fff",
  secondButtonTextColor: "#fff",
  firstButtonBackgroundColor: "#b5b6cf",
  secondButtonBackgroundColor: "#895aaf",
  description:
    "Would you like to try our short tutorial to show you how this app work? It will take no more than 30 seconds!"
};

export default BasicModal;
