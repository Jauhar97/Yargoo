import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [authData, setauthData] = useState({});

  console.log(authData);

  const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const register = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        authData,
        setauthData,
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});
