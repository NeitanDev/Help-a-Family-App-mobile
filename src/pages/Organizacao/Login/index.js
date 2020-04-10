import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import fam from '../../../assets/organizaçãomodal.png';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    Logo,
    TitlePage,
    ContainerTitlePage,
    ContainerOrg,
    OrgImage,
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
                <ContainerOrg>
                    <OrgImage source={fam} />
                </ContainerOrg>
                <Form>
                    <Title>
                        Encontre Familias que precisam de ajuda
                    </Title>
                    <Input
                        placeholder="Email da entidade"
                        autoCompleteType="email"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha"
                        // autoCompleteType="password"
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