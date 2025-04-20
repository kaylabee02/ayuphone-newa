import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginContainer from '../screens/Login/LoginContainer';

type RootStackParamList = {
    Home: undefined; // Add other screens with their types
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={LoginContainer} />
                {/* Add more screens here */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
