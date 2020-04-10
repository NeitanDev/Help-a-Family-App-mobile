import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';

// import { Container } from './styles';
import {
    Container,
    Header,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Logo,
    TitlePage,
} from './style';

export default function Historico() {
    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Historico</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body></Body>
        </Container>
    );
}