import React, { useState } from 'react';
import { View, TouchableOpacity, Linking, AsyncStorage, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logosounou from '../../../assets/LogoVerde.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../../services/api';

import {
    Container,
    Header,
    ContainerLogo,
    Logo,
    ContainerTitlePage,
    Body,
    ContentInfoFamily,
    TopInfoFamily,
    Title,
    Description,
    LocalInfoFamily,
    ContainerTitleInfoFamily,
    TitleInfoFamily,
    ContentBunttons,
    Button,
    ButtonHistory,
    ButtonHistoryText,
    Scroll,
} from './style';

export default function FamilyProfile() {

    const navigation = useNavigation();
    const route = useRoute();
    const fam = route.params.fam;

    async function createHistory() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                const response = await api.post(`/create/${fam.id}/historico/${value}`);
                if (response) {
                    Alert.alert(
                        'Adicionado ao historico com sucesso',
                        ``,

                        [
                            { text: 'OK', onPress: () => { navigation.goBack() } },
                        ],
                        { cancelable: false }
                    );
                } else if (!response) {
                    Alert.alert(
                        'Erro ao adicionar ao hisorico',
                        ``,

                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false }
                    );
                }
            } else if (value == null) {
                console.log('valor retornou nulo');
            }
        } catch (error) {
            console.log('Deu bosta na hora de salvar, aconteceu isso: ' + error);
        }
    }

    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons name="ios-return-left" size={40} color="#FFF" />
                    </TouchableOpacity>
                </ContainerTitlePage>
            </Header>
            <Body>
                <Scroll>
                    <ContentInfoFamily>
                        <ContainerTitleInfoFamily>
                            <TitleInfoFamily>Informações</TitleInfoFamily>
                        </ContainerTitleInfoFamily>
                        <TopInfoFamily>
                            <View>
                                <Title>Familia:</Title>
                                <Description>{fam.sobrenome}</Description>
                            </View>
                            <View>
                                <Title>Menbros:</Title>
                                <Description>{fam.qtd_membros}</Description>
                            </View>
                        </TopInfoFamily>
                        <Title>Chefe de Familia:</Title>
                        <Description>{fam.nome}</Description>
                        <LocalInfoFamily>
                            <View>
                                <Title>Endereço:</Title>
                                <Description>{fam.endereco}</Description>
                            </View>
                            <View>
                                <Title>Numero:</Title>
                                <Description>{fam.number}</Description>
                            </View>
                        </LocalInfoFamily>
                        <Title>Mensagem:</Title>
                        <Description>{fam.mensagem}</Description>
                    </ContentInfoFamily>
                    <ContentInfoFamily>
                        <ContainerTitleInfoFamily>
                            <TitleInfoFamily>Entre em contato</TitleInfoFamily>
                        </ContainerTitleInfoFamily>
                        <ContentBunttons>
                            <Button
                                onPress={() => {
                                    Linking.openURL(`whatsapp://send?phone=+55${fam.whatsapp}`);
                                }}
                            >
                                <MaterialCommunityIcons name="whatsapp" size={40} color="#FFF" />
                            </Button>
                            <Button
                                onPress={() => {
                                    Linking.openURL(`tel:${fam.telefone}`)
                                }}
                            >
                                <MaterialCommunityIcons name="phone" size={40} color="#FFF" />
                            </Button>
                        </ContentBunttons>
                    </ContentInfoFamily>
                    <ContentInfoFamily>
                        <ContainerTitleInfoFamily>
                            <TitleInfoFamily>Ajudamos essa Familia</TitleInfoFamily>
                        </ContainerTitleInfoFamily>
                        <ContentBunttons>
                            <ButtonHistory
                                onPress={createHistory}
                            >
                                <ButtonHistoryText>
                                    Add ao Histoico
                            </ButtonHistoryText>
                            </ButtonHistory>
                        </ContentBunttons>
                    </ContentInfoFamily>
                </Scroll>
            </Body>
        </Container>
    );
}