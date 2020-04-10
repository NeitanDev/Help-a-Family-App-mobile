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
        tabBarOptions={{
            activeTintColor: '#FFF',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#2bbf54',
            inactiveBackgroundColor: '#2bbf54',
            style: {
                borderTopWidth:0,
                shadowColor: '#2bbf54',
                shadowOpacity: 0,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                elevation: 0,
            },
          }}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Historico" component={Historico} />
            <Tab.Screen name="Map" component={Maps} />
        </Tab.Navigator>
    );
}