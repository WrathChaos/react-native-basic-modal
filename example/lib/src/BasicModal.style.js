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
  }
};
