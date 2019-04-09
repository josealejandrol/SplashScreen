import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image 
            source={require("../src/img/image3.png")}
            style={{width:200, height:200}}
          />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tristique hac aliquam, curabitur risus himenaeos erat montes euismod ac magnis phasellus.
          </Text>
        <TouchableOpacity style={styles.moreButon}>
            <Text style={styles.textButon}>-></Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3838',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white'
  },
  moreButon: {
    borderRadius: 50,
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#0DD5FF',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  textButon: {
    fontSize: 24,
    color: '#fff'
  }
});