import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import BasicModal from "../BasicModal/BasicModal";
import styles from "./HalloweenModal.style";

const HalloweenModal = props => {
  return (
    <BasicModal
      {...props}
      titleColor="#fff"
      descColor="#d9d9d9"
      secondButtonTextColor="#616161"
      firstButtonBackgroundColor="#453d5d"
      secondButtonBackgroundColor="#ffa17f"
    >
      <Image
        resizeMode="contain"
        style={styles.pumpkinImageStyle}
        source={require("../fundamental-assets/pumpkin2.png")}
      />
    </BasicModal>
  );
};

export default HalloweenModal;
