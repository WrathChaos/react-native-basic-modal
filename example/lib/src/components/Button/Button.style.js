export const buttonContainer = backgroundColor => {
  return {
    width: 75,
    height: 35,
    backgroundColor,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export const buttonTextStyle = fontColor => {
  return {
    fontSize: 13,
    color: fontColor,
    fontWeight: 'bold',
  };
};
