import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import configureStore from "./core/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BootSplash from "react-native-bootsplash";
import Toast from "react-native-toast-message";
import HamburgerMenuDrawer from "./components/hamburger-drawer/HamburgerDrawer";
import BottomTabs from "./components/bottom-tab-menu/BottomTabMenu";

import {
  useColorScheme,
} from "react-native";

import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";

const store = configureStore();
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  console.log("isAuth", isAuthenticated);
  return (
    <>
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        {!isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login", headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={HomeScreen}
              options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Menu" component={HamburgerMenuDrawer} />

          </Stack.Navigator>
        ) : (
          <>
            <HamburgerMenuDrawer />
          </>
        )}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
