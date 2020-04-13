import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';

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
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Senha:</TitleInput>
                        <Inupt
                            placeholder="Ex: familiaSou123..."
                            autoCorrect={false}
                            autoCapitalize="none"
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
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Sobrenome da familia:</TitleInput>
                        <Inupt
                            placeholder="Ex: Souza da Silva..."
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Quantidade de Menbros na Familia:</TitleInput>
                        <Inupt
                            placeholder="Ex: 4"
                            autoCorrect={false}
                            autoCapitalize="none"
                            // maxLength={4}
                            keyboardType={'numeric'}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Reacado para as entidades (opcional):</TitleInput>
                        <Inupt
                            placeholder="Ex: Somos uma familia que necessita..."
                            autoCorrect={true}
                            // autoCapitalize="none"
                            maxLength={255}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>WhatsApp (opcional):</TitleInput>
                        <Inupt
                            placeholder="Ex: (11) 90000-0000"
                            autoCorrect={true}
                            // autoCapitalize="none"
                            maxLength={255}
                            keyboardType={'numeric'}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TitleInput>Telefone (opcional):</TitleInput>
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
                            />
                            <CordsInupt
                                placeholder="Longitude"
                                keyboardType={'numeric'}
                            />
                        </ContainerInputCord>
                    </ContainerInput>

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