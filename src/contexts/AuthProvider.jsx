import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

  const userInfo={
    email:'alu@balu.com'
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;