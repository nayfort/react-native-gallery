//import React, {Component} from 'react';
//import { StyleSheet, View} from 'react-native';
//
//import {Provider} from 'react-redux';
//import {store} from './app/store/store'
//
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//
//import GalleryScreen from './app/components/GalleryScreen'
//import DetailImage from './app/components/DetailImageScreen'
//
//
//export default class App extends Component {
//    render() {
//        return (
//            <Provider store={store}>
//                <AppContainer>
//                    <View style={styles.container}>
//                        <GalleryScreen />
//                    </View>
//                </AppContainer>
//            </Provider>
//        );
//    }
//}
//
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//        backgroundColor: 'white',
//    },
//});
//
//const AppNavigator = createStackNavigator({
//    Gallery: {screen: GalleryScreen},
//    Image: {screen: DetailImage},
//});
//
//const AppContainer = createAppContainer(AppNavigator);




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
