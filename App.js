import React from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import * as Font from 'expo-font';
//import Index from './src/index';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Amaranth-Regular': require('./assets/fonts/Amaranth-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <>
        {
          //<StatusBar backgroundColor="#87c5b6"/>
        }
        {
          this.state.fontLoaded ? (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#2bbf54' }}>
              <Text style={{ fontSize: 56, fontFamily: 'Amaranth-Regular', color: '#FFF' }}>Hello Word</Text>
            </View>
          ) : null
        }
      </>
    );
  }
}