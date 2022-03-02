import {StyleSheet} from 'react-native';
import {colors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: colors.blackGray,
  },
});
