import React from 'react';
import { View, Text,Image } from 'react-native';
import Logo from '../../../assets/sounou.png';


export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#2bbf54' }}>
            <Image source={Logo} />
            <Text style={{ fontFamily: 'Amaranth-Regular', fontSize: 56, color: '#FFF' }}>Home</Text>
        </View>
    );
}
