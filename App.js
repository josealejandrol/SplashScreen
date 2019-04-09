import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Main from './components/Main';
import HomeScreen from './components/HomeScreen';

export default class App extends Component {
  render() {
    return (
      <HomeScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});
