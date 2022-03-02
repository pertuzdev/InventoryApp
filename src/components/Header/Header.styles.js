import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imgCont: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  img: {
    //width: 200,
    //height: 200,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'blue',
  },
  txtWrapper: {
    marginLeft: 20,
  },
  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    marginTop: 14,
    marginBottom: 14,
  },
  infoCard: {
    width: '45%',
  },
  btnContainer: {
    width: 110,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
