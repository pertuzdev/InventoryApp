import {StyleSheet} from 'react-native';
import {colors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,

    paddingVertical: 8,
    paddingHorizontal: 16,
    //height: 75,
    //justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgCont: {
    width: 75,
    height: 75,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img: {
    //flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  splashImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  txtWrapper: {
    marginLeft: 20,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
  cardDescription: {},
  arrow: {
    marginRight: 8,
  },
});
