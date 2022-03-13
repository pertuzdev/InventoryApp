import React, {useReducer, useState} from 'react';

import {
  signUpWithCredentials,
  signInWithCredentials,
  signInWithGoogle,
  signOut,
  setUser,
  resetUserError,
} from './UserActions';

import userReducer from './userReducers';

const UserContext = React.createContext({});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function UserProvider({children}) {
  /*const [userRequest, setUserRequest] = useState({
    user: null,
    loading: false,
    userStatusError: null,
  }); */

  const [state, dispatch] = useReducer(userReducer, initialState);

  const {loading, user, error} = state;

  const register = async (email, password) => {
    await signUpWithCredentials({email, password, dispatch});
  };

  const login = async (email, password) => {
    await signInWithCredentials({email, password, dispatch});
  };

  const googleLogin = async () => {
    await signInWithGoogle({dispatch});
  };

  const logout = async () => {
    await signOut({dispatch});
  };

  const setCurrentUser = ({authUser}) => {
    setUser({user: authUser, dispatch});
  };

  const resetError = () => {
    resetUserError({dispatch});
  };

  const contextValues = {
    user,
    loading,
    error,
    register,
    login,
    googleLogin,
    logout,
    setCurrentUser,
    resetError,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
