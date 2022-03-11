import React from 'react';
import {AuthProvider} from '../context/AuthContext';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
