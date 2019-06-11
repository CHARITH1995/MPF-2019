import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import AppContainer from './AppNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const axios = require('axios');

export default class App extends Component{

  componentDidMount() {
      SplashScreen.hide();
  }

// componentDidMount(){
//   axios.get('https://mpf.gov.mv/wp-json/wp/v2/posts')
//   .then(function (response) {
//     alert(JSON.stringify(response))
//   })
//   .catch(function (error) {
//     alert(error);
//   })
// }
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
