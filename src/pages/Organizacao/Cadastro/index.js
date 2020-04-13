import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


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
    const [currentRegion, setCurrentRegion] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


    async function loadPosition() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;
            setLatitude(latitude);
            setLongitude(longitude);
            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.0001,
            })
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
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: entidade123..."
                            autoCorrect={false}
                            autoCapitalize="none"
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
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Descrição sobre as atividades:</TitleInput>
                        <Inupt
                            placeholder="Ex: Doamos cestas basicas..."
                            autoCorrect={false}
                            autoCapitalize="none"
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
                            // autoCapitalize="none"
                            maxLength={255}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Número:</TitleInput>
                        <Inupt
                            placeholder="Ex: 149"
                            autoCorrect={true}
                            // autoCapitalize="none"
                            // maxLength={255}

                            keyboardType={'numeric'}
                        />
                    </ContainerInput>
                    <Button>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                </Scroll>
            </Body>
        </Container>
    );
}