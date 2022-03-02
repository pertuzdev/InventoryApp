import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primaryBlue: '#2E3192',
  gray: '#9E9EA7',
  mediumGray: '#C3C3C3',
  lightGray: '#F3F3F4',
  blackGray: '#222222',
  darkGray: '#79747E',
  red: '#DC3545',
  shadowColor: '#7090B0',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fontSizes = {
  sm: 12,
  md: 14,
  lg: 18,
};

export const TextStyles = {
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: fontSizes.lg,
    color: colors.blackGray,
  },
  standardRegularTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: fontSizes.md,
    color: colors.blackGray,
  },
  buttonTxt: {
    fontFamily: 'Roboto-Bold',
    fontSize: fontSizes.md,
  },
  cardTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: fontSizes.lg,
    color: colors.blackGray,
  },
  cardDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: fontSizes.sm,
    color: colors.blackGray,
  },
  placeholder: {
    fontFamily: 'Roboto-Regular',
    fontSize: fontSizes.sm,
    color: colors.gray,
  },
};
