import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import galleryScreen from '/expo/gallery/app/components/galleryScreen';
import detailImageScreen from '/expo/gallery/app/components/detailImageScreen';
import {store} from "./app/store/store";
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator(
    {
        Gallery: {screen: galleryScreen},
        Image: {screen: detailImageScreen},
    }
);

export default function App() {
  return (
    <NavigationContainer store={store}>
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

