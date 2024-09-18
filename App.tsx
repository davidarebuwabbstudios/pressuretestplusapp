import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './core/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BootSplash from 'react-native-bootsplash';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import HomeScreen from './screens/login/LoginScreen';
import LoginScreen from './screens/home/HomeScreen';
import RegisterScreen from './screens/register/RegisterScreen';


const store = configureStore();
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'  , headerShown: false }} />       
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'  , headerShown: false }} /> 
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
