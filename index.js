import './gesture-handler';
import React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";
import configureStore from "./core/store";

const store = configureStore();

export default function Main() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <App />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
