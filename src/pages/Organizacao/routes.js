import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile/index';
import Historico from './Historico/index';
import Maps from './Map/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesing from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function Org() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#c1f1ce',
                inactiveTintColor: '#1c7d38',
                activeBackgroundColor: '#2bbf54',
                inactiveBackgroundColor: '#2bbf54',
                style: {
                    borderTopWidth: 0,
                    shadowColor: '#2bbf54',
                    shadowOpacity: 0,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                        iconName = 'profile';
                        return <AntDesing name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Historico') {
                        iconName = 'history';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Map') {
                        iconName = 'google-maps';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    }

                    // You can return any component that you like here!
                    
                },
            })}

        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Historico" component={Historico} />
            <Tab.Screen name="Map" component={Maps} />
        </Tab.Navigator>
    );
}