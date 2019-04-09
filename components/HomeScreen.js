import React from 'react';
import {Text, View, StyleSheet, Button, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
   render() {
    const {navigate} = this.props.navigation;
       return (
           <View style={styles.container}>
                <ImageBackground
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesreactnative/Fondo1.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAApxrRyOpndnKbGJsercD%2F06URCBhkNrRwVe7iEzYQdUuctuKY%2BNPEq0GPThkMqpzIujzBYzY5VjXNEKAP44kpsUHyPo83h9mcfoJlbuUviMq4tfl74lEesf5XUI%2Buu3hFu2RAKbqr3aMCdLaYxZ%2BKD0Xn76vU2bI8H68TcQIwpBSDeoHWMLjfgYnCYEa1AFcLjkXSHqGLp0LuOiOI1t6f8YeaWhixP59qH894fZElR%2FsFShwyOes9kpO7ZvhmdjJuQO6hEpBcFcLMVfQrrzxs75iTmes5qGwKgo9ieae3nFwO%2FaGVZrZaZMfXyhvtsJ2nf4gHVv361J74NG%2F0pCw2Gsq2wMIYRAAGgw3NjM3NTIzODE1NDgiDPZG46xqQI3A%2BXoZ7yq4A9mpNHQh7g1HGJvGbsrdyOoq8K7J9Wns4tlgKqH5Qdb9qBQjcUv29WOYamLKq5Wfkej2ID0qfza7LXSfqCLN6J1wPWYLhJ0tWPVW4ZWL3DQl0DD1pjgGIL7I2D8Xo0gme1FZ9OFFkK75X7wD25x7jL4bH2rjwCBL5eA0dX2Jo3JFXFRKeBA3nbd%2Bb5v9R1Hpa4jtPtbfSpiNWxl%2FaKmNiog3grVhkqhU0bl3BDoTXCwASZKAQcFyg7T6KyAqmj3Zxqti4aY5qWrCcaZI46syUMsnopOb11Muot55sRpycjIwa43emYfQcodARVszl%2FlHyC6NTzzq%2FEX3Goio5jYGmbEa%2BQHO7Vv9TGGUB2AC14yj5ZdtOdr727EkQx%2Bn64L5FsKDh1CLY%2Fmnp8YQIT5rKa0J3Rn8MgWoXSAc9scj8Ln5QxZtiUFpV9%2Bey%2Fku6NzEnPi9TT%2BP99hgihWlnbDN40eu7YOFyFLbat0xQVhOyjFQFiXbC31zq4Px6Me953rEs33gPBQRNa3v4zV5ncirv6OXrKalt5XX%2B7IF8exVtxgGj5PuOZBylrs5WAL4XzjMDuOCMATUR%2BAzMKGGs%2BUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190409T161207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3DUZQPRWLSM7O4WV%2F20190409%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=8b44dc42e986e1ba6dab60c13735f4f1471dfa597b4b1e0c062462ab033585d4'}}
                    style={{width:360, height:600}}
                >
                <Text style={styles.text}>Welcome to HomeScreen</Text>
                <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('First')}
                />
                </ImageBackground>
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
        margin: 10,
        color: 'white'
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