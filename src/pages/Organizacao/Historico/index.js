import React, { useEffect, useState } from 'react';
import { AsyncStorage, TouchableOpacity, YellowBox } from 'react-native';
import io from 'socket.io-client';
import { useNavigation } from '@react-navigation/native';
import Logosounou from '../../../assets/LogoVerde.png';
import api from '../../../services/api';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Logo,
    TitlePage,
    ContainerList,
    FamiliaText,
    ContainerFamiliaText,
    List,
    Item,
    Title,
    ContainerFamiliaHeader,
} from './style';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

export default function Historico() {

    const navigation = useNavigation();
    const [history, setHistory] = useState([]);

    async function _retrieveData() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                const response = await api.get(`historico/orgList/${value}`);
                setHistory(response.data);
            }
        } catch (error) {
            console.log('deu merda na hora de buscar' + error);
        }
    };

    async function logout() {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Home');
        } catch (error) {
            console.log('deu bosta na hora de fazer o logout, o erro foi: ' + error);
        }
    }

    async function registerToSocket() {
        const socket = io('http://192.168.4.102:3333');
        socket.on('hist', newHist => {
            setHistory(newHist);
        })
    }

    useEffect(() => {
        _retrieveData();
        registerToSocket();
    }, []);

    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TouchableOpacity
                        onPress={logout}
                    >
                        <TitlePage>Historico</TitlePage>
                    </TouchableOpacity>
                </ContainerTitlePage>
            </Header>
            <Body>
                <Title>
                    Familias ajudadas
                </Title>
                <ContainerList>
                    <List showsVerticalScrollIndicator={false}>
                        {history.map(item => (
                            <Item key={item.id}>
                                <ContainerFamiliaText>
                                    <ContainerFamiliaHeader>
                                        Familia ajudada:
                                    </ContainerFamiliaHeader>
                                    <FamiliaText>
                                        {item.sobrenome}
                                    </FamiliaText>
                                </ContainerFamiliaText>
                                <ContainerFamiliaText>
                                    <ContainerFamiliaHeader>
                                        Data:
                                    </ContainerFamiliaHeader>
                                    <FamiliaText>
                                        {item.date}
                                    </FamiliaText>
                                </ContainerFamiliaText>
                            </Item>
                        ))}
                    </List>
                </ContainerList>
            </Body>
        </Container>
    );
}