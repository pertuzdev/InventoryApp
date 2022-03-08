import {StyleSheet} from 'react-native';

import {colors} from '../../../styles/globalStyles';

export const commonInputStyles = StyleSheet.create({
  label: {
    marginBottom: 8,
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.darkGray,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.darkGray,
    borderWidth: 1,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputArea: {
    backgroundColor: 'white',
    borderColor: colors.darkGray,
    textAlignVertical: 'top',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});
