import React from 'react';
import {UserProvider} from '../context/UserContext';
import Routes from './Routes';

const Providers = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default Providers;
