import React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import Modal from "react-native-modal";
/**
 * ? Local Imports
 */
import styles from "./BasicModal.style";
import Button from "../Button/Button";

interface BasicModalProps {
  title: string;
  description: string;
  isVisible: boolean;
  // Optionals
  style?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  headerComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  onPrimaryButtonPress?: () => void;
  onBackdropPress?: () => void;
  onSecondaryButtonPress?: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({
  title,
  description,
  isVisible,
  style,
  modalContainerStyle,
  contentContainerStyle,
  titleTextStyle,
  descriptionTextStyle,
  buttonsContainerStyle,
  primaryButtonText = "Next",
  secondaryButtonText = "Skip",
  headerComponent,
  footerComponent,
  children,
  onBackdropPress,
  onPrimaryButtonPress,
  onSecondaryButtonPress,
}) => {
  const renderDefaultButtonsContainer = () => {
    return (
      children || (
        <View style={[styles.buttonsContainer, buttonsContainerStyle]}>
          <Button
            text={secondaryButtonText}
            style={styles.secondaryButtonStyle}
            onPress={() => onSecondaryButtonPress?.()}
          />
          <Button
            text={primaryButtonText}
            style={styles.primaryButtonStyle}
            onPress={() => onPrimaryButtonPress?.()}
          />
        </View>
      )
    );
  };

  const renderContentContainer = () => {
    return (
      <View style={contentContainerStyle}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {description}
        </Text>
      </View>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      style={[styles.modalContainer, modalContainerStyle]}
      onBackdropPress={onBackdropPress}
    >
      <View style={[styles.container, style]}>
        {headerComponent}
        {renderContentContainer()}
        {footerComponent}
        {renderDefaultButtonsContainer()}
      </View>
    </Modal>
  );
};

export default BasicModal;
