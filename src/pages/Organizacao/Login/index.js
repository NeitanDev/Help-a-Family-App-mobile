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
                        Encontre alguma entidade que possa lhe ajudar
                    </Title>
                    <Input
                        placeholder="Email da entidade"
                    />
                    <Input
                        placeholder="Senha"
                    />
                    <Button>
                        <ButtonText>Login</ButtonText>
                    </Button>
                </Form>
            </Body>
        </Container>
    );
}