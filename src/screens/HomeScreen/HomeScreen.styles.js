import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 8,
  },
  btnContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingTop: 4,
  },
});
