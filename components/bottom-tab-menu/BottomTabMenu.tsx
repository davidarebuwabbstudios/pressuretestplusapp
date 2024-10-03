import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';
import RunningTestsScreen from '../../screens/running-tests/RunningTestsScreen';
import CompletedTestsScreen from '../../screens/completed-tests/CompletedTestsScreen';
import ConnectLoggerScreen from '../../screens/connect-logger/ConnectLoggerScreen';
import ContactScreen from '../../screens/contact/ContactScreen';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const RunningStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Running Tests" component={RunningTestsScreen} />
      </Stack.Navigator>
    );
  }

  const CompletedStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Completed Tests" component={CompletedStackNavigator} />
      </Stack.Navigator>
    );
  }

  const ConnectStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Connect" component={ConnectLoggerScreen} />
      </Stack.Navigator>
    );
  }


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}


function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="New Test" component={MainStackNavigator} />
      <Tab.Screen name="Running" component={RunningStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedStackNavigator} />
      <Tab.Screen name="Connect" component={ConnectStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabs;