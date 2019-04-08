import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Screen3/>
      </View>
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
