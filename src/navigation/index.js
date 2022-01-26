import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

const Providers = () => {
  //console.log('oli');
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
