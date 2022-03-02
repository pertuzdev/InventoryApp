import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  notFoundWrapper: {
    paddingTop: 24,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  notFoundtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
});
