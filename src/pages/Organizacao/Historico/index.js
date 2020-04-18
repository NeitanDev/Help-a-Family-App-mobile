import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import Logosounou from '../../../assets/LogoVerde.png';
import api from '../../../services/api';

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

    const [orgId, setOrgId] = useState(0);
    const [history, setHistory] = useState([]);

    async function _retrieveData() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                await setOrgId(value);
                const response = await api.get(`historico/orgList/${value}`);
                setHistory(response.data);
            }
        } catch (error) {
            console.log('deu merda na hora de buscar' + error);
        }
    };

    useEffect(() => {
        _retrieveData();
        // loadHistiry();
    }, []);

    async function loadHistiry() {
        // const response = await api.get(`historico/orgList/${orgId}`);
        // setHistory(response.data);
        // console.log("Chamei essa merda");
        // console.log(orgId);
    };

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
                        {history.map(item => (
                            <Item key={item.id}>
                                <ContainerFamiliaText>
                                    <ContainerFamiliaHeader>
                                        Familia ajudada:
                                    </ContainerFamiliaHeader>
                                    <FamiliaText>
                                        {item.sobrenome}
                                    </FamiliaText>
                                </ContainerFamiliaText>
                                <ContainerFamiliaText>
                                    <ContainerFamiliaHeader>
                                        Data:
                                    </ContainerFamiliaHeader>
                                    <FamiliaText>
                                        {
                                            
                                            item.data
                                        }
                                    </FamiliaText>
                                </ContainerFamiliaText>
                            </Item>
                        ))}
                    </List>
                </ContainerList>
            </Body>
        </Container>
    );
}