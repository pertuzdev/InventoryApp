import {StyleSheet} from 'react-native';
import {colors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: colors.lightGray,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 15,
  },
});
