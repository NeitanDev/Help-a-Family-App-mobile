import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Logosounou from '../../assets/LogoVerde.png';
import Solidariedade from '../../assets/solidariedade.jpg';
import FamiliaModal from '../../assets/FamiliaModal.png';
import Organizacaomodal from '../../assets/organizaçãomodal.png';

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
    return (

        <Container>
            <Modal animatedType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <ContainerModal>
                    <BodyModal>
                        <ModalItem style={{ marginBottom: 20 }}>
                            <ModalItemViewImage>
                                <ModalItemImage source={FamiliaModal} />
                            </ModalItemViewImage>
                            <ModalItemText>Familia</ModalItemText>
                        </ModalItem>
                        <ModalItem>
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
                    <ButtonLogin onPress={() => setVivibleModal(true)}>
                        <ButtonLoginText>
                            Login
                        </ButtonLoginText>
                    </ButtonLogin>
                    <ButtonCadastro onPress={() => setVivibleModal(true)}>
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
