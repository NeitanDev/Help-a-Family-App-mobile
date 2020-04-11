import React from 'react';
import { View, Text } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';

// import { Container } from './styles';
import {
    Container,
    Header,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Logo,
    TitlePage,
    ContainerList,
    FamiliaText,
    ContainerFamiliaText,
    List,
    Item,
    Title,
    ContainerFamiliaHeader,
} from './style';

export default function Historico() {
    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Historico</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                <Title>
                    Familias ajudadas
                </Title>
                <ContainerList>
                    <List showsVerticalScrollIndicator={false}>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                        <Item>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Familia ajudada:
                                    </ContainerFamiliaHeader>
                                <FamiliaText>
                                    Familia aleatoria de sounou
                                    </FamiliaText>
                            </ContainerFamiliaText>
                            <ContainerFamiliaText>
                                <ContainerFamiliaHeader>
                                    Data:
                                </ContainerFamiliaHeader>
                                <FamiliaText>00/00/0000</FamiliaText>
                            </ContainerFamiliaText>
                        </Item>

                    </List>
                </ContainerList>
            </Body>
        </Container>
    );
}