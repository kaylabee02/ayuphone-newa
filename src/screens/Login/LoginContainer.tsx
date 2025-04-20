import React, { useState } from 'react';
import {  ActivityIndicator, View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';

import { Credentials } from '../../types/authTypes';

// import { login } from '../../store/authSlice';
// import { useAppDispatch } from '../../store/hooks';
// const dispatch = useAppDispatch();
//logincontainer is the name of the component and this function is a functional component
const LoginContainer: React.FC = () => {
    // const navigation = useNavigation();
  
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
    email: '',
  });
  // this line intializes state  variable credentials and a function setcredentials
  // usestate it’s used to store and update the user’s credentials.
  //called array destructuring
  // By writing <Credentials> with useState, you’re telling TypeScript:
  // "I expect credentials to be an object that looks like a Credentials object."
  // part is a TypeScript type annotation
  
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (username: string) => {
    setCredentials((prev) => ({ ...prev, username }));
  };
  // { ...prev } is a spread operator, which creates a copy of
  // the previous state (prev) to ensure that existing properties of the state are not lost.
  const handlePasswordChange = (password: string) => {
    setCredentials((prev) => ({ ...prev, password }));
  };

  const handleEmailChange = (email: string) => {
    setCredentials((prev) => ({ ...prev, email }));
  };
  const handleRegister = () => {
    // navigation.navigate('Register');
  };

  //helper functions that update specific fields. setcredentials
  // uses prev and only targeted the field using spread operator ( ...prev)
  //without affecting other fields
  const handleLoginPress = async () => {
    setLoading(true);
      
  };

  // Handle logout
  const handleLogoutPress = async () => {
    // await logoutUser();
  };

  return (
      <View style={{ flex: 1 }}>
          {loading && (
              <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  
              </View>
          )}
          <LoginScreen
              credentials={credentials}
              loading={loading}
              onUsernameChange={handleUsernameChange}
              onPasswordChange={handlePasswordChange}
              onEmailChange={handleEmailChange}
              onLoginPress={handleLoginPress}
              onLogoutPress={handleLogoutPress}
              onRegisterPress={handleRegister}
          />
      </View>
  );
};

// property or prop being passed
//rendering UI
// this passes several props
//handlers ( onUsernameChange, etc) these functions are passed as props
//to be triggered when corresponding actions like typing, or pressing buttons
const styles = StyleSheet.create({
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});
export default LoginContainer;
// this component contains business logic
// data processing
