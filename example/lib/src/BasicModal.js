import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import Button from "./components/Button/Button";

const BasicModal = props => {
  const [visibility, setVisibility] = useState(true);
  const {
    isVisible,
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
      isVisible={isVisible || visibility}
      style={{ alignItems: "center", justifyContent: "center" }}
      onBackdropPress={() => setVisibility(false)}
    >
      <View
        style={{
          height: 185,
          width: "90%",
          backgroundColor: "#fff",
          borderTopEndRadius: 64,
          borderBottomStartRadius: 64
        }}
      >
        <View
          style={{
            marginTop: 24,
            marginLeft: 24,
            marginRight: 16,
            marginBottom: 24
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>
            Hold on!
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 14,
              color: "#ccc",
              fontWeight: "700"
            }}
          >
            Would you like to try our short tutorial to show you how this app
            work? It will take no more than 30 seconds!
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 16,
            bottom: 24,
            flexDirection: "row"
          }}
        >
          <View style={{ marginRight: 8 }}>
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
  isVisible: PropTypes.bool,
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string,
  firstButtonTextColor: PropTypes.string,
  secondButtonTextColor: PropTypes.string,
  firstButtonBackgroundColor: PropTypes.string,
  secondButtonBackgroundColor: PropTypes.string
};

BasicModal.defaultProps = {
  firstButtonText: "SKIP",
  secondButtonText: "NEXT",
  firstButtonTextColor: "#fff",
  secondButtonTextColor: "#fff",
  firstButtonBackgroundColor: "#b5b6cf",
  secondButtonBackgroundColor: "#895aaf"
};

export default BasicModal;
