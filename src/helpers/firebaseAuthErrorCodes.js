export const createUserWithEmailAndPasswordStatusCodes = {
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  WEAK_PASSWORD: 'auth/weak-password',
};

export const signInWithEmailAndPasswordStatusCodes = {
  INVALID_EMAIL: 'auth/invalid-email',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
};

export const signInWithCredentialStatusCodes = {
  ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL:
    'auth/account-exists-with-different-credential',
  INVALID_CREDENTIAL: 'auth/invalid-credential',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_VERIFICATION_CODE: 'auth/invalid-verification-code',
  INVALID_VERIFICATION_ID: 'auth/invalid-verification-id',
};

export const signOutStatusCodes = {
  INVALID_USER_TOKEN: 'auth/invalid-user-token',
  USER_TOKEN_EXPIRED: 'auth/user-token-expired',
  NULL_USER: 'auth/null-user',
  TENANT_ID_MISMATCH: 'auth/tenant-id-mismatch',
};
