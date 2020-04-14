import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

import {
    Container,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Header,
    Logo,
    TitlePage,
    Title,
    Scroll,
    ContainerInput,
    TitleInput,
    Inupt,
    ContainerInputCord,
    CordsInupt,
    Button,
    ButtonText,
} from './styles';

export default function Cadastro() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [endereco, setEndereco] = useState('');
    const [number, setNumber] = useState('');

    const navigation = useNavigation();

    async function loadPosition() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;
            setLatitude(latitude);
            setLongitude(longitude);
        }
    }

    async function createOrg() {
        const data = {
            email,
            senha,
            nome,
            descricao,
            telefone,
            whatsapp,
            latitude,
            longitude,
            endereco,
            number: parseInt(number),
        };
        const response = await api.post('/create/organizacao', data);
        if (response) {
            Alert.alert(
                'Cadastro Realizado com sucesso',
                `Agora a entidade ${nome} pode fazer o Login, e assim ver as familias que vc pode ajudar`,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
            navigation.navigate('Home');
        }
    }

    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Cadastro</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                <Scroll>
                    <Title>Faça o Cadastro</Title>
                    <ContainerInput>
                        <TitleInput>Email de acesso:</TitleInput>
                        <Inupt
                            placeholder="Ex: Entidade@gmail.com..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: entidade123..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Repita a senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: entidade123..."
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Nome:</TitleInput>
                        <Inupt
                            placeholder="Ex: Entidade de doações..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Descrição sobre as atividades:</TitleInput>
                        <Inupt
                            placeholder="Ex: Doamos cestas basicas..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={descricao}
                            onChangeText={setDescricao}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>WhatsApp (Inclua o DDD):</TitleInput>
                        <Inupt
                            placeholder="Ex: (11) 90000-0000"
                            autoCorrect={true}
                            // autoCapitalize="none"
                            maxLength={255}
                            keyboardType={'numeric'}
                            value={whatsapp}
                            onChangeText={setWhatsapp}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Telefone (Inclua o DDD):</TitleInput>
                        <Inupt
                            placeholder="Ex: (11) 90000-0000"
                            autoCorrect={true}
                            // autoCapitalize="none"
                            maxLength={255}
                            keyboardType={'numeric'}
                            value={telefone}
                            onChangeText={setTelefone}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <TitleInput>Coordenadas:</TitleInput>
                        <ContainerInputCord>
                            <CordsInupt
                                placeholder="Latitude"
                                keyboardType={'numeric'}
                                value={`${latitude}`}
                                onChangeText={setLatitude}
                            />
                            <CordsInupt
                                placeholder="Longitude"
                                keyboardType={'numeric'}
                                value={`${longitude}`}
                                onChangeText={setLongitude}
                            />
                        </ContainerInputCord>
                    </ContainerInput>
                    <Button
                        onPress={() => {
                            loadPosition();
                        }}
                        style={{ backgroundColor: '#FFF', borderWidth: 0.3, borderColor: '#4d4d4d' }}
                    >
                        <ButtonText style={{ color: '#b3b3b3' }}>Preencher coordenadas automaticamente</ButtonText>
                    </Button>
                    <ContainerInput>
                        <TitleInput>Endereço:</TitleInput>
                        <Inupt
                            placeholder="Ex: R. Edson Petri"
                            autoCorrect={true}
                            maxLength={255}
                            value={endereco}
                            onChangeText={setEndereco}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Número da sede da organização:</TitleInput>
                        <Inupt
                            placeholder="Ex: 149"
                            autoCorrect={true}
                            keyboardType={'numeric'}
                            value={number}
                            onChangeText={setNumber}
                        />
                    </ContainerInput>
                    <Button onPress={createOrg}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                </Scroll>
            </Body>
        </Container>
    );
}