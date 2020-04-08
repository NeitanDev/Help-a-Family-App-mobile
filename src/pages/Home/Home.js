import React from 'react';
import { View, Text, Image } from 'react-native';
import Logosounou from '../../assets/LogoVerde.png';

import { Container, Header, Logo } from './styles/style';


export default function Home() {
    return (
        <Container>
            <Header>
                <View style={{backgroundColor: '#333',height:'100%',width:'50%', alignItems:'center'}}>
                    <Logo source={Logosounou} />
                </View>
            </Header>
            <Text style={{ fontFamily: 'Amaranth-Regular', fontSize: 56, color: '#FFF' }}>Home</Text>
        </Container>

    );
}
