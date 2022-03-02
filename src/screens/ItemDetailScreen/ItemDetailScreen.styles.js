import {StyleSheet} from 'react-native';
import {colors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},
  head: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    marginBottom: 12,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  imgCont: {
    width: 200,
    height: 200,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  splashImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 20,
  },
  productInfo: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  productLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: colors.darkGray,
  },
  descLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: colors.darkGray,
    marginBottom: 8,
  },
  productTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: colors.blackGray,
  },
});
