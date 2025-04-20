/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


import LoginScreen from "./src/screens/Login/LoginContainer";

function App(): React.JSX.Element {
   

    return (
        <View >
        <LoginScreen />
        </View>
    );
}



export default App;
