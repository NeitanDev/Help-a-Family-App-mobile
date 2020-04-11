import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Logo,
    TitlePage,
} from './style';

export default function Profile() {
    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Perfil</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                
            </Body>
        </Container>
    );
}