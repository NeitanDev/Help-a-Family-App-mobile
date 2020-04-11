import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function FamilyProfile() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Amaranth-Regular', fontSize: 56, textAlign: "center" }}>Family Profile</Text>
        </View>
    );
}