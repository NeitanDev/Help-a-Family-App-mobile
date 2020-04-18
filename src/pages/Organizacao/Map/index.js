import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { View, StyleSheet, Text } from 'react-native';
// import Constants from 'expo-constants';
import Logosounou from '../../../assets/LogoVerde.png';
import FamiliIcon from '../../../assets/FamiliaModal.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

import {
    Container,
    Header,
    Body,
    ContainerLogo,
    ContainerTitlePage,
    Logo,
    TitlePage,
    IconFamily,
    ContainerIconFamily,
    CalloutDetails,
    NameFamily,
    TitleNameFamily,
    ContentNameFamili,
    TopFamili,
} from './style';

export default function Map() {

    const navigation = useNavigation();
    const [currentRegion, setCurrentRegion] = useState(null);
    const [latitude, setLatitude] = useState(-23.2730918);
    const [longitude, setLongitude] = useState(-46.5902931);

    const [family, setFamily] = useState([]);

    async function loadPosition() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;
            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            })
        }
    }

    useEffect(() => {
        loadPosition();
        loadFamily();
    }, []);

    async function loadFamily() {
        const response = await api.get('/map/familyList');
        setFamily(response.data);
    }

    return (
        <Container>
            <Header>
                <ContainerLogo>
                    <Logo source={Logosounou} />
                </ContainerLogo>
                <ContainerTitlePage>
                    <TitlePage>Mapa</TitlePage>
                </ContainerTitlePage>
            </Header>
            <Body>
                <View style={styles.container}>
                    <MapView initialRegion={currentRegion} style={styles.mapStyle}>
                        {family.map(fam => (
                            <Marker key={fam.id} coordinate={{ latitude: parseFloat(fam.latitude), longitude: parseFloat(fam.longitude) }}>
                                <ContainerIconFamily>
                                    <IconFamily source={FamiliIcon} />
                                </ContainerIconFamily>
                                <Callout style={styles.callout} onPress={() => navigation.navigate('FamilyProfile', { fam })}>
                                    <CalloutDetails>
                                        <TopFamili>
                                            <ContentNameFamili>
                                                <TitleNameFamily>Familia:</TitleNameFamily>
                                                <NameFamily>{fam.sobrenome}</NameFamily>
                                            </ContentNameFamili>
                                            <ContentNameFamili>
                                                <TitleNameFamily>Menbros:</TitleNameFamily>
                                                <NameFamily>{fam.qtd_membros}</NameFamily>
                                            </ContentNameFamili>
                                        </TopFamili>
                                        <TitleNameFamily>Chefe de Familia:</TitleNameFamily>
                                        <NameFamily>{fam.nome}</NameFamily>
                                        <TitleNameFamily>Mensagem:</TitleNameFamily>
                                        <NameFamily>{fam.mensagem}</NameFamily>
                                    </CalloutDetails>
                                </Callout>
                            </Marker>
                        ))}

                    </MapView>
                </View>
            </Body>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        height: '100%',
        width: '100%',
        borderRadius: 50,
        overflow: 'hidden'
        // paddingTop: Constants.statusBarHeight,
    },
    mapStyle: {
        //flex: 1,
        borderRadius: 50,
        height: '100%',
        width: '100%',

    },
    callout: {
        width: 260,
        height: 130,
        borderRadius: 10,
    }
});
