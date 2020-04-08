import React from 'react';
import * as Font from 'expo-font';
import Index from './src/index';

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
            <Index />
          ) : null
        }
      </>
    );
  }
}