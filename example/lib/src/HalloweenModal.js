import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import BasicModal from "./BasicModal";

const HalloweenModal = props => {
  const { example } = props;
  return (
    <BasicModal
      {...props}
      titleColor="#fff"
      descColor="#d9d9d9"
      secondButtonTextColor="#616161"
      firstButtonBackgroundColor="#453d5d"
      secondButtonBackgroundColor="#ffa17f"
    >
      <View style={{ zIndex: 9999 }}>
        <Image
          resizeMode="contain"
          style={{
            top: -36,
            height: 75,
            width: 125,
            right: -36,
            position: "absolute",
            backgroundColor: "transparent"
          }}
          source={require("./fundamental-assets/pumpkin2.png")}
        />
      </View>
    </BasicModal>
  );
};

HalloweenModal.propTypes = {
  example: PropTypes.number
};

HalloweenModal.defaultProps = {
  example: 5
};

export default HalloweenModal;
