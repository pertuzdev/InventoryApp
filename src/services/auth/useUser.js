import {useContext} from 'react';

import UserContext from './UserContext';

export function useUser() {
  const {user, setCurrentUser, loading, error, resetError} =
    useContext(UserContext);
  return {user, setCurrentUser, loading, error, resetError};
}

export function useUserAuth() {
  const {register, login, googleLogin, logout} = useContext(UserContext);
  return {register, login, googleLogin, logout};
}
