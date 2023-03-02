import React from 'react';
const {createContext, useState} = require('react');
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState(null);

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: token => {
      setAuthToken(token);
    },
    logout: async () => {
      await auth().signOut();
      setAuthToken(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
