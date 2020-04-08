import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
//import Login from './pages/initial/Login';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Login" component={Login} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;