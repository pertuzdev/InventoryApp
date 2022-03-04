import {
  createUserWithEmailAndPasswordStatusCodes as registerStatusCodes,
  signInWithEmailAndPasswordStatusCodes as signInStatusCodes,
  signInWithCredentialStatusCodes,
} from '../../firebaseAuthErrorCodes';

export const alertValues = {
  [registerStatusCodes.EMAIL_ALREADY_IN_USE]: {
    alertTitle: 'Email already exist',
    alertBody:
      'Seems the email you entered is already in use. Please check and try again.',
  },
  [registerStatusCodes.INVALID_EMAIL]: {
    alertTitle: 'Invalid Email',
    alertBody: 'Email you entered is invalid. Please check and try again.',
  },

  [signInStatusCodes.INVALID_EMAIL]: {
    alertTitle: 'Invalid Email',
    alertBody: 'Email you entered is invalid. Please check and try again.',
  },
  [signInStatusCodes.USER_NOT_FOUND]: {
    alertTitle: 'User Not Found',
    alertBody: 'There is no user corresponding to the given email.',
  },
  [signInStatusCodes.WRONG_PASSWORD]: {
    alertTitle: 'Wrong Password',
    alertBody:
      'The password is invalid or the user does not have a password.. Please check and try again.',
  },

  [signInWithCredentialStatusCodes.USER_NOT_FOUND]: {
    alertTitle: 'User Not Found',
    alertBody: 'There is no user corresponding to the given email.',
  },
  [signInWithCredentialStatusCodes.WRONG_PASSWORD]: {
    alertTitle: 'Wrong Password',
    alertBody: 'Password you entered is invalid. Please check and try again.',
  },
};
