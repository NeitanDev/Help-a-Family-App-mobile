import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import FamilyProfile from '../FamilyProfile/index';


const Stack = createStackNavigator();

function RoutesMap() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={Index}
            animationEnabled={false}
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="FamilyProfile" component={FamilyProfile} />
        </Stack.Navigator>
    );
}

export default RoutesMap;