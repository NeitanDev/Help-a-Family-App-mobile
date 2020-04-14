import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/native';

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
    const [chave, setChave] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [qtd, setQtd_membros] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [endereco, setEndereco] = useState('');
    const [num, setNumber] = useState('');

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
    };


    async function createFamily() {
        const data = {
            chave,
            senha,
            nome,
            sobrenome,
            qtd_membros: parseInt(qtd),
            mensagem,
            telefone,
            whatsapp,
            endereco,
            number: parseInt(num),
            latitude,
            longitude,
        };
        // console.log(data);
        const response = await api.post('/create/familia', data);
        // console.log(response);
        if (response) {
            Alert.alert(
                'Cadastro Realizado com sucesso',
                'Agora vc pode ser localizado por entidades de doações para lhe ajudar',
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
                        <TitleInput>Chave de acesso:</TitleInput>
                        <Inupt
                            placeholder="Ex: familiaSou..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={chave}
                            onChangeText={setChave}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: familiaSou123..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Repita a senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: familiaSou123..."
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Nome do chefe de familia:</TitleInput>
                        <Inupt
                            placeholder="Ex: Jailson..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Sobrenome da familia:</TitleInput>
                        <Inupt
                            placeholder="Ex: Souza da Silva..."
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={sobrenome}
                            onChangeText={setSobrenome}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Quantidade de Menbros na Familia:</TitleInput>
                        <Inupt
                            placeholder="Ex: 4"
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType={'numeric'}
                            value={`${qtd}`}
                            onChangeText={setQtd_membros}
                        />
                    </ContainerInput>
                    <ContainerInput style={{ height: 200 }}>
                        <TitleInput>Reacado para as entidades (opcional):</TitleInput>
                        <Inupt
                            placeholder="Ex: Somos uma familia que necessita de ajuda com cestas basicas..."
                            autoCorrect={true}
                            multiline={true}
                            numberOfLines={4}
                            maxLength={255}
                            style={{ height: 170, textAlignVertical: "top", paddingTop: 10, paddingBottom: 10 }}
                            value={mensagem}
                            onChangeText={setMensagem}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>WhatsApp (opcional):</TitleInput>
                        <Inupt
                            placeholder="Ex: (11) 90000-0000"
                            autoCorrect={true}
                            maxLength={255}
                            keyboardType={'numeric'}
                            value={whatsapp}
                            onChangeText={setWhatsapp}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Telefone (opcional):</TitleInput>
                        <Inupt
                            placeholder="Ex: (11) 90000-0000"
                            autoCorrect={true}
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
                        <TitleInput>Número da residencia:</TitleInput>
                        <Inupt
                            placeholder="Ex: 149"
                            autoCorrect={true}
                            keyboardType={'numeric'}
                            value={`${num}`}
                            onChangeText={setNumber}
                        />
                    </ContainerInput>
                    <Button onPress={createFamily}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                </Scroll>
            </Body>
        </Container>
    );
}