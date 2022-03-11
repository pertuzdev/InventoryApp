import React, {useState} from 'react';

import {
  signUpWithCredentials,
  signInWithCredentials,
  signInWithGoogle,
  signOut,
} from '../auth';

const AuthContext = React.createContext({});

export function AuthProvider({children}) {
  const [userRequest, setUserRequest] = useState({
    user: null,
    loading: false,
    userStatusError: null,
  });

  const register = async (email, password) => {
    await signUpWithCredentials({email, password, setUserRequest});
  };

  const login = async (email, password) => {
    await signInWithCredentials({email, password, setUserRequest});
  };

  const googleLogin = async () => {
    await signInWithGoogle({setUserRequest});
  };

  const logout = async () => {
    await signOut({setUserRequest});
  };

  const contextValues = {
    userRequest,
    setUserRequest,
    register,
    login,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
