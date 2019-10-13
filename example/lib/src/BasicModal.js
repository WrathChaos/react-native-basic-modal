import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import Button from "./components/Button/Button";
import LinearGradient from "react-native-linear-gradient";
import styles, { container, _titleStyle, _descStyle } from "./BasicModal.style";

const BasicModal = props => {
  renderButtonContainer = () => {
    const {
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
    );
  };

  renderTitleContainer = () => {
    const {
      title,
      descColor,
      descStyle,
      titleStyle,
      titleColor,
      description
    } = props;
    return (
      <View style={styles.containerGlue}>
        <Text style={titleStyle || _titleStyle(titleColor)}>{title}</Text>
        <Text style={descStyle || _descStyle(descColor)}>{description}</Text>
      </View>
    );
  };

  renderHalloweenModal = () => {
    const { height, width, backgroundColor, children } = props;
    return (
      <View style={container(height, width, backgroundColor)}>
        {children}
        <LinearGradient
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          colors={["#3f3a5a", "#73597c", "#af7a94"]}
          style={{
            zIndex: 1,
            width: "100%",
            height: "100%",
            borderTopEndRadius: 64,
            borderBottomStartRadius: 64
          }}
        >
          {renderTitleContainer()}
          {renderButtonContainer()}
        </LinearGradient>
      </View>
    );
  };

  renderNormalModal = () => {
    const { height, width, backgroundColor, children } = props;
    return (
      <View style={container(height, width, backgroundColor)}>
        {children}
        {renderTitleContainer()}
        {renderButtonContainer()}
      </View>
    );
  };

  const {
    isVisible,
    isHalloweenTheme,
    firstButtonText,
    onBackdropPress
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      onBackdropPress={onBackdropPress}
    >
      {isHalloweenTheme ? renderHalloweenModal() : renderNormalModal()}
    </Modal>
  );
};

BasicModal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  descColor: PropTypes.string,
  titleColor: PropTypes.string,
  description: PropTypes.string,
  isHalloweenTheme: PropTypes.bool,
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
  isHalloweenTheme: true,
  secondButtonText: "NEXT",
  firstButtonTextColor: "#fff",
  secondButtonTextColor: "#fff",
  firstButtonBackgroundColor: "#b5b6cf",
  secondButtonBackgroundColor: "#895aaf",
  description:
    "Would you like to try our short tutorial to show you how this app work? It will take no more than 30 seconds!"
};

export default BasicModal;
