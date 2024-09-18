/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';

export default function Main() {
    return (
    <SafeAreaProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
      </SafeAreaProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);



