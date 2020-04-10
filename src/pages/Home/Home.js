import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logosounou from '../../assets/LogoVerde.png';
import Solidariedade from '../../assets/solidariedade.jpg';
import FamiliaModal from '../../assets/oie_transparent.png';
import Organizacaomodal from '../../assets/oie_transparent2.png';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    Logo,
    ContainerSolid,
    Solid,
    TitlePage,
    ContainerTitlePage,
    Title,
    Form,
    ButtonLogin,
    ButtonLoginText,
    ButtonCadastro,
    ButtonCadastroText,
    Link,
    ContainerModal,
    ButtonVoltar,
    ButtonVoltarText,
    BodyModal,
    ModalItem,
    ModalItemImage,
    ModalItemViewImage,
    ModalItemText
} from './styles/style';


export default function Home() {
    const [visibleModal, setVivibleModal] = useState(false);
    const [quem, setQuem] = useState('');
    const [qual, setQual] = useState('');

    const navigation = useNavigation();

    return (
        <Container>
            <Modal
                animated="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <ContainerModal>
                    <BodyModal>
                        <ModalItem
                            style={{ marginBottom: 20 }}
                            onPress={() => {
                                setVivibleModal(false);
                                navigation.navigate(`${qual}Familia`);
                            }}
                        >
                            <ModalItemViewImage>
                                <ModalItemImage source={FamiliaModal} />
                            </ModalItemViewImage>
                            <ModalItemText>Familia</ModalItemText>
                        </ModalItem>
                        <ModalItem
                            onPress={() => {
                                setVivibleModal(false);
                                navigation.navigate(`${qual}Org`);
                            }}
                        >
                            <ModalItemViewImage>
                                <ModalItemImage source={Organizacaomodal} />
                            </ModalItemViewImage>
                            <ModalItemText>Organização</ModalItemText>
                        </ModalItem>
                    </BodyModal>
                    <ButtonVoltar>
                        <TouchableOpacity onPress={() => setVivibleModal(false)}>
                            <ButtonVoltarText>Close</ButtonVoltarText>
                        </TouchableOpacity>
                    </ButtonVoltar>
                </ContainerModal>
            </Modal>

            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Home</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                <ContainerSolid>
                    <Solid source={Solidariedade} />
                </ContainerSolid>
                <Title>Solidariedade é o nosso lema</Title>
                <Form>
                    <ButtonLogin
                        onPress={() => {
                            setVivibleModal(true);
                            setQual('Login')
                        }}
                    >
                        <ButtonLoginText>
                            Login
                        </ButtonLoginText>
                    </ButtonLogin>
                    <ButtonCadastro
                        onPress={() => {
                            setVivibleModal(true);
                            setQual('Cadastro')
                        }}
                    >
                        <ButtonCadastroText>
                            Cadastro
                        </ButtonCadastroText>
                    </ButtonCadastro>
                    <TouchableOpacity>
                        <Link>Sobre nós</Link>
                    </TouchableOpacity>
                </Form>
            </Body>
        </Container>

    );
}
