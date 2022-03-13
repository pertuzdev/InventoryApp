import React from 'react';
import {UserProvider} from '../services/auth/UserContext';
import Routes from './Routes';

const Providers = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default Providers;
