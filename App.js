import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './app/store/store'

import {createStackNavigator, createAppContainer} from 'react-navigation';

import GalleryScreen from './app/components/GalleryScreen'
import DetailImage from './app/components/DetailImageScreen'
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
            <Provider store={store}>
                <AppContainer>
                    <View style={styles.container}>
                        <GalleryScreen />
                    </View>
                </AppContainer>
            </Provider>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const AppNavigator = createStackNavigator({
    Gallery: {screen: GalleryScreen},
    Image: {screen: DetailImage},
});

const AppContainer = createAppContainer(AppNavigator);
//1


//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//
//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
