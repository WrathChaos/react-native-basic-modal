export const container = (height, width, backgroundColor) => {
  return {
    width,
    height,
    backgroundColor,
    borderTopEndRadius: 64,
    borderBottomStartRadius: 64
  };
};

export const _titleStyle = color => {
  return {
    color,
    fontSize: 22,
    fontWeight: "bold"
  };
};

export const _descStyle = color => {
  return {
    color,
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700"
  };
};

export default {
  containerGlue: {
    marginTop: 16,
    marginLeft: 24,
    marginRight: 16,
    marginBottom: 24
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    right: 16,
    bottom: 24,
    flexDirection: "row",
    position: "absolute"
  },
  firstButtonContainer: {
    marginRight: 8
  },
  halloweenGradientContainer: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderTopEndRadius: 64,
    borderBottomStartRadius: 64
  },
  birdyImageStyle: {
    left: 16,
    bottom: 0,
    width: 45,
    height: 75,
    zIndex: 9999,
    position: "absolute"
  },
  gradientColors: ["#af7a94", "#73597c", "#3f3a5a"]
};
