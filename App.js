import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './app/components/galleryScreen';
import DetailImageScreen from "./app/components/detailImageScreen";
import { Provider } from 'react-redux';
import {store} from "./app/store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Image" component={DetailImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
       <Text>This is the home screen</Text>
      <StatusBar style="auto" />
    </View>
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
