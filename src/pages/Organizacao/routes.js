import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile/index';
import Historico from './Historico/index';
import Maps from './Map/index';

const Tab = createBottomTabNavigator();

export default function Org() {
    return (
        <Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Historico" component={Historico} />
            <Tab.Screen name="Map" component={Maps} />
        </Tab.Navigator>
    );
}