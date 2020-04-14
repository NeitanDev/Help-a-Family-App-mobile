import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import fam from '../../../assets/organizaçãomodal.png';
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation();

    async function handleLogin() {
        async function _storeData() {
            try {
                await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
                console.log("salvei essa bosta");
            } catch (error) {
                console.log('deu merda na hora de criar' + error);
            }
        };

        async function _retrieveData() {
            try {
                const value = await AsyncStorage.getItem('@MySuperStore:key');
                if (value !== null) {
                    // We have data!!
                    console.log(value);
                }
            } catch (error) {
                console.log('deu merda na hora de buscar' + error);
            }
        };

        // _storeData();
        _retrieveData();
    }
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
                    <Button onPress={() => { handleLogin(); navigation.navigate('Org'); }}>
                        <ButtonText>Login</ButtonText>
                    </Button>
                </Form>
            </Body>
        </Container>
    );
}