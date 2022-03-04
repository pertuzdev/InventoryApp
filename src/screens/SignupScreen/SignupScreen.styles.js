import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  btnWp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
    marginHorizontal: 50,
    paddingVertical: 12,
  },
  navButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    marginHorizontal: 16,
    textAlign: 'center',
  },
  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 30,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
