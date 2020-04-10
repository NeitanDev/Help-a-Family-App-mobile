import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import LoginFamilia from './pages/Familia/Login/index';
import LoginOrg from './pages/Organizacao/Login/index';
import CadastroFamilia from './pages/Familia/Cadastro/index';
import CadastroOrg from './pages/Organizacao/Cadastro/index';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="LoginFamilia" component={LoginFamilia} />
                <Stack.Screen name="LoginOrg" component={LoginOrg} />
                <Stack.Screen name="CadastroFamilia" component={CadastroFamilia} />
                <Stack.Screen name="CadastroOrg" component={CadastroOrg} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;