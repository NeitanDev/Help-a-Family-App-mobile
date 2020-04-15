import React, { useState } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import fam from '../../../assets/organizaçãomodal.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

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

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    async function _storeData(id) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', id.toString());
            console.log("salvei essa bosta");
        } catch (error) {
            console.log('deu merda na hora de criar' + error);
        }
    };

    async function handleLogin() {
        const data = {
            email,
            senha
        };
        try {
            const response = await api.post('/login/org', data);
            const fam = response.data;
            _storeData(fam.id);
            navigation.navigate('Org');
        } catch (err) {
            Alert.alert(
                'Email ou senha incorretos',
                `Insira os corretamente`,

                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
            // console.log(err);
        }
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
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        // autoCompleteType="password"
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <Button onPress={() => { handleLogin() }}>
                        <ButtonText>Login</ButtonText>
                    </Button>
                </Form>
            </Body>
        </Container>
    );
}