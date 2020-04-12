import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';

import {
    Container,
    Header,
    ContainerLogo,
    Logo,
    ContainerTitlePage,
    TitlePage,
    Body,
} from './style';

export default function FamilyProfile() {
    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Familia</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                
            </Body>
        </Container>
    );
}