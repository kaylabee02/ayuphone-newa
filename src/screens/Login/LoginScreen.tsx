import React from 'react';

import { LoginViewProps } from '../../types/authTypes';
import {  View,
    StyleSheet,
    Image,
    Text,
    
    TouchableOpacity,} from 'react-native';
import InputField from '../../component/InputField';
//loginscreen is a functional component that accepts only what loginviewprops declared and
// {(...)} this is desctructuring means extracting the specific prop from the loginviewprops 
const LoginScreen: React.FC<LoginViewProps> = ({
    credentials,
    loading,
    onUsernameChange,
    onPasswordChange,
    onEmailChange,
    onLoginPress,
    onRegisterPress,
}) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/assets/images/splashImage.webp')}
            resizeMode="contain"
          />
        </View>
  
        <View style={styles.contentContainer}>
          <View style={styles.inputFields}>
            <Text style={{ fontWeight: '500', color: 'black' }}>Email</Text>
            <InputField
              placeholder="Email"
              value={credentials.email}
              onChangeText={onEmailChange}
              style={styles.inputField}
            />
            <Text style={{ fontWeight: '500', color: 'black' }}>Password</Text>
            <InputField
              placeholder="Password"
              value={credentials.password}
              onChangeText={onPasswordChange}
              secureTextEntry
              style={styles.inputField}
            />
          </View>
  
          <View>
            <TouchableOpacity onPress={onLoginPress} style={styles.button}>
              <Text style={{ color: 'white' }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textReg}>
            <TouchableOpacity onPress={onRegisterPress}>
              <Text style={{ fontWeight: '500', color: 'black' }}>
                Don’t have any account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181B1E',
    },
    imageContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: '80%',
      width: '80%',
    },
    contentContainer: {
      flex: 7,
      backgroundColor: 'white',
      borderTopLeftRadius: 90,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    inputFields: {
      width: '90%',
      margin: 20,
    },
    inputField: {
      marginBottom: 50,
    },
  
    button: {
      height: 80,
      width: '90%',
      margin: 20,
      backgroundColor: '#181B1E',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 1,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    textReg: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default LoginScreen;