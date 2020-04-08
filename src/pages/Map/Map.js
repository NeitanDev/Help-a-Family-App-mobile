import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function Index() {
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
        <View style={styles.container}>
            <MapView initialRegion={currentRegion} style={styles.mapStyle}>
                <Marker coordinate={{ latitude, longitude }}>

                </Marker>
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    mapStyle: {
        flex: 1,
    },
});
