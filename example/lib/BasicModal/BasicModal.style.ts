import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderTopEndRadius: 64,
    borderBottomStartRadius: 64,
  },
  titleTextStyle: {
    fontSize: 22,
    fontFamily: 'Nunito-Black',
  },
  descriptionTextStyle: {
    marginTop: 8,
    fontSize: 14,
    color: '#ccc',
    fontFamily: 'Nunito-Bold',
  },
  buttonsContainer: {
    marginTop: 16,
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  primaryButtonStyle: {
    marginLeft: 8,
  },
  secondaryButtonStyle: {
    backgroundColor: '#B5B6CF',
  },
  primaryButtonTextStyle: {
    fontFamily: 'Nunito-Bold',
  },
  secondaryButtonTextStyle: {
    fontFamily: 'Nunito-Bold',
  },
});
