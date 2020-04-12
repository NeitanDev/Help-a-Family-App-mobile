import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logosounou from '../../../assets/LogoVerde.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    Header,
    ContainerLogo,
    Logo,
    ContainerTitlePage,
    TitlePage,
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
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FamilyProfile() {

    const navigation = useNavigation();

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
                                <Description>Souza Ernandes</Description>
                            </View>
                            <View>
                                <Title>Menbros:</Title>
                                <Description>12</Description>
                            </View>
                        </TopInfoFamily>
                        <Title>Chefe de Familia:</Title>
                        <Description>Ernesto</Description>
                        <LocalInfoFamily>
                            <View>
                                <Title>Endereço:</Title>
                                <Description>R. Édson Petri</Description>
                            </View>
                            <View>
                                <Title>Numero:</Title>
                                <Description>205</Description>
                            </View>
                        </LocalInfoFamily>
                        <Title>Mensagem:</Title>
                        <Description>somos uma Familia muito carente e precisamos de ajuda nessa pan demia</Description>
                    </ContentInfoFamily>
                    <ContentInfoFamily>
                        <ContainerTitleInfoFamily>
                            <TitleInfoFamily>Entre em contato</TitleInfoFamily>
                        </ContainerTitleInfoFamily>
                        <ContentBunttons>
                            <Button>
                                <MaterialCommunityIcons name="whatsapp" size={40} color="#FFF" />
                            </Button>
                            <Button>
                                <MaterialCommunityIcons name="phone" size={40} color="#FFF" />
                            </Button>
                        </ContentBunttons>
                    </ContentInfoFamily>
                    <ContentInfoFamily>
                        <ContainerTitleInfoFamily>
                            <TitleInfoFamily>Ajudamos essa Familia</TitleInfoFamily>
                        </ContainerTitleInfoFamily>
                        <ContentBunttons>
                            <ButtonHistory>
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