import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { View, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';
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
} from './style';

export default function Map() {

    const [currentRegion, setCurrentRegion] = useState(null);
    const [latitude, setLatitude] = useState(-23.2730918);
    const [longitude, setLongitude] = useState(-46.5902931);

    useEffect(() => {
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
        loadPosition();
    }, []);

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
                <Marker coordinate={{ latitude, longitude }}>

                </Marker>
            </MapView>
                </View>
            </Body>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:    '#333',
        height: '100%',
        width:'100%',
        borderRadius:50,
        overflow: 'hidden' 
        // paddingTop: Constants.statusBarHeight,
    },
    mapStyle: {
        //flex: 1,
        borderRadius:50,
        height: '100%',
        width:'100%',
        
    },
});
