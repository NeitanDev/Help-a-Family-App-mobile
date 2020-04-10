import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import fam from '../../../assets/FamiliaModal.png';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    Logo,
    TitlePage,
    ContainerTitlePage,
    ContainerFamilia,
    FamiliaImage,
    Form,
    Title,
    Input,
    Button,
    ButtonText
} from './style';

export default function Login() {
    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Login</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                <ContainerFamilia>
                    <FamiliaImage source={fam} />
                </ContainerFamilia>
                <Form>
                    <Title>
                        Encontre alguma entidade que possa lhe ajudar
                    </Title>
                    <Input
                        placeholder="Sua chave"
                        autoCorrect={false}
                        allowFontScaling={true}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Sua senha"
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <Button>
                        <ButtonText>Login</ButtonText>
                    </Button>
                </Form>
            </Body>
        </Container>
    );
}