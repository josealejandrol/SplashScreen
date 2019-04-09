import React from 'react';
import {Text, View, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
   render() {
    const {navigate} = this.props.navigation;
       return (
           <View style={styles.container}>
               <Text style={styles.text}>Welcome to HomeScreen</Text>
               <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('First')}
                />
           </View>
       )
   } 
}

class First extends React.Component {
    static navigationOptions = {
        title: 'First'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container1}>
                <View>
                    <Image 
                    source={require("../src/img/image1.png")}
                    style={{width:200, height:200}}
                    />
                </View>
                <Text style={styles.text1}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit tristique hac aliquam, curabitur risus himenaeos erat montes euismod ac magnis phasellus.
                </Text>
                <TouchableOpacity style={styles.moreButon1}
                    onPress={() => navigate('Second')}
                >
                    <Text style={styles.textButon1}>-></Text>
                </TouchableOpacity>
                <Button
                    title="Go to SecondScreen"
                    onPress={() => navigate('Second')}
                />
            </View>
        )
    } 
 }

class Second extends React.Component {
    static navigationOptions = {
        title: 'Second'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container2}>
                <View>
                    <Image 
                    source={require("../src/img/image2.png")}
                    style={{width:200, height:200}}
                    />
                </View>
                <Text style={styles.text2}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit tristique hac aliquam, curabitur risus himenaeos erat montes euismod ac magnis phasellus.
                </Text>
                <TouchableOpacity style={styles.moreButon2}
                    onPress={() => navigate('Third')}
                >
                    <Text style={styles.textButon2}>-></Text>
                </TouchableOpacity>
                <Button
                    title="Go to ThirdScreen"
                    onPress={() => navigate('Third')}
                />
            </View>
        )
    } 
 }

 class Third extends React.Component {
    static navigationOptions = {
        title: 'Third'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container3}>
                <View>
                    <Image 
                    source={require("../src/img/image3.png")}
                    style={{width:200, height:200}}
                    />
                </View>
                <Text style={styles.text3}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit tristique hac aliquam, curabitur risus himenaeos erat montes euismod ac magnis phasellus.
                </Text>
                <TouchableOpacity style={styles.moreButon3}
                    onPress={() => navigate('Home')}
                >
                    <Text style={styles.textButon3}>-></Text>
                </TouchableOpacity>
                <Button
                    title="Go to HomeScreen"
                    onPress={() => navigate('Home')}
                />
            </View>
        )
    } 
 }

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    First: {
        screen: First
    },
    Second: {
        screen: Second
    },
    Third: {
        screen: Third
    }
  });
  
  export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    container1: {
        flex: 1,
        backgroundColor: '#AF00B5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360
      },
      text1: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white'
      },
      moreButon1: {
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
      textButon1: {
        fontSize: 24,
        color: '#fff'
      },

    container2: {
        flex: 1,
        backgroundColor: '#195EFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360
      },
      text2: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white'
      },
      moreButon2: {
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
      textButon2: {
        fontSize: 24,
        color: '#fff'
      },

      container3: {
        flex: 1,
        backgroundColor: '#FF3838',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360
      },
      text3: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white'
      },
      moreButon3: {
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
      textButon3: {
        fontSize: 24,
        color: '#fff'
      }
});