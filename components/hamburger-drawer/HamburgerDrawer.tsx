import * as React from "react";
import { useEffect } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Drawer as PaperDrawer } from "react-native-paper";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../../screens/home/HomeScreen";
import RunningTestsScreen from "../../screens/running-tests/RunningTestsScreen";
import CompletedTestsScreen from "../../screens/completed-tests/CompletedTestsScreen";
import ConnectLoggerScreen from "../../screens/connect-logger/ConnectLoggerScreen";
import ContactScreen from "../../screens/contact/ContactScreen";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import LogoutModal from "../logout/LogoutModal";
import * as authActions from "../../core/actions/authActions";
import BottomTabs from "../bottom-tab-menu/BottomTabMenu";
//Type 1 Imports
import TypeOneTestDetailsScreen from "../../screens/create-test/type-one-test/TypeOneTestDetailsScreen";
import TypeOneTestPressureScreen from "../../screens/create-test/type-one-test/TypeOneTestPressureScreen";
import TypeOneTestFlowRateScreen from "../../screens/create-test/type-one-test/FlowRateScreen";
import TypeOneTestPrepressurisationScreen from "../../screens/create-test/type-one-test/PrepressurisationScreen";
import PressurisationScreen from "../../screens/create-test/type-one-test/PressurisationScreen";
import FlowMeterReading from "../../screens/create-test/type-one-test/FlowMeterReading";
import FlowTimerScreen from "../../screens/create-test/type-one-test/FlowTimerScreen";
import IsolateMainScreen from "../../screens/create-test/type-one-test/IsolateMainScreen";
import SystemPressureScreen from "../../screens/create-test/type-one-test/SystemTestPressureScreen";
import WaterVolumeScreen from "../../screens/create-test/type-one-test/WaterVolumeScreen";
import TypeOneTestDataSummaryScreen from "../../screens/create-test/type-one-test/DataSummaryScreen";
import CompleteTypeOneTestScreen from "../../screens/create-test/type-one-test/CompleteTypeOneTestScreen";
//Type 2
import TypeTwoTestDetailsScreen from "../../screens/create-test/type-two-test/TypeTwoTestDetails";
import TypeTwoTestPressureScreen from "../../screens/create-test/type-two-test/TypeTwoTestPressure";
import TypeTwoTestPrepressurisationScreen from "../../screens/create-test/type-two-test/TypeTwoPrepressurisation";
import TypeTwoPressurisationScreen from "../../screens/create-test/type-two-test/TypeTwoPressurisation";
import TypeTwoTestProgressScreen from "../../screens/create-test/type-two-test/TestProgressScreen";
import CompleteTypeTwoTestScreen from "../../screens/create-test/type-two-test/CompleteTestScreen";

const logo = require("../../assets/bootsplash/main-logo.png");

function HamburgerMenuDrawer() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
    switch (routeName) {
      case "Create Test":
        return "New Test";
      case "Running":
        return "Running Tests";
      case "Completed":
        return "Completed Tests";
      case "Connect":
        return "Connect a Logger";
      case "Contact":
        return "Contact Us";
      default:
        "Pressure";
    }
  }

  const handleLogout = () => {
    dispatch(authActions.setAuthToken(false));
  };

  const screenOptionStyle = {
    headerShown: false
  };

  //drawerContent options for each route
  const getHeaderForRoute = (routeName, navigation) => {
    switch (routeName) {
      case "Create New Test":
      case "Running Tests":
      case "Completed Tests":
      case "Running Tests":
      case "Contact Us":
      case "":
        return {
          headerLeft: (props) => (
            <Icon
              name="bars"
              onPress={navigation.toggleDrawer}
              style={{ paddingLeft: 10 }}
              size={25}
              color="#fff"
            />
          ),
          drawerActiveTintColor: "#53A020",
          contentOptions: {
            activeTintColor: "#53A020",
            activeBackgroundColor: "transparent",
            inactiveTintColor: "#ffffff"
          },
          headerTitle: routeName
          // headerRight: () => (

          //   <View style={{ marginRight: 15, flexDirection: 'row' }}>
          //     {/* your code*/}
          //   </View>
          // ),
        };
      case "Type One Test Pressure":
        return {
          headerLeft: (props) => (
            <Icon
              name="bars"
              onPress={navigation.toggleDrawer}
              style={{ paddingLeft: 10 }}
              size={25}
              color="#fff"
            />
          ),
          drawerActiveTintColor: "#53A020",
          contentOptions: {
            activeTintColor: "#53A020",
            activeBackgroundColor: "transparent",
            inactiveTintColor: "#ffffff"
          },
          headerTitle: routeName,
          headerRight: () => (
            <MaterialCommunityIcons name="briefcase-plus-outline" size={20} />
          )
        };
      case "SomeOther":
        return {
          headerShown: true,
          headerTitle: "SomeTitle"
        };
      default:
        return {};
    }
  };

  console.log("navTitle", navigation);

  const CreateTestNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="New Test"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="New Test" component={HomeScreen} />
        <Stack.Screen
          name="Type One Test Details"
          component={TypeOneTestDetailsScreen}
        />
        <Stack.Screen
          name="Type One Test Pressure"
          component={TypeOneTestPressureScreen}
        />
        <Stack.Screen
          name="Type One Flow Rate"
          component={TypeOneTestFlowRateScreen}
        />
        <Stack.Screen
          name="Type One Pressurisation"
          component={TypeOneTestPrepressurisationScreen}
        />
        <Stack.Screen name="Pressurisation" component={PressurisationScreen} />
        <Stack.Screen name="Flow Meter Reading" component={FlowMeterReading} />
        <Stack.Screen name="Flow Timer" component={FlowTimerScreen} />
        <Stack.Screen name="Isolate Main" component={IsolateMainScreen} />
        <Stack.Screen name="System Pressure" component={SystemPressureScreen} />
        <Stack.Screen name="Water Volume" component={WaterVolumeScreen} />
        <Stack.Screen
          name="Data Summary"
          component={TypeOneTestDataSummaryScreen}
        />
        <Stack.Screen
          name="Complete Type One Test"
          component={CompleteTypeOneTestScreen}
        />

        <Stack.Screen
          name="Type Two Test Details"
          component={TypeTwoTestDetailsScreen}
        />
        <Stack.Screen
          name="Type Two Test Pressure"
          component={TypeTwoTestPressureScreen}
        />
        <Stack.Screen
          name="Type Two Prepressurisation"
          component={TypeTwoTestPrepressurisationScreen}
        />
        <Stack.Screen
          name="Type Two Pressurisation"
          component={TypeTwoPressurisationScreen}
        />
        <Stack.Screen
          name="Type Two Test Progress"
          component={TypeTwoTestProgressScreen}
        />
        <Stack.Screen
          name="Complete Type Two Test"
          component={CompleteTypeTwoTestScreen}
        />
      </Stack.Navigator>
    );
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#53A020",
          tabBarInactiveTintColor: "gray"
        }}
        // initialRouteName={navTitle}
      >
        <Tab.Screen
          name="New Test"
          component={CreateTestNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="plus-circle"
                size={20}
                color={`${focused ? color : "#404040"}`}
              />
            )
          }}
        />
        <Tab.Screen
          name="Running"
          component={RunningTestsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="tachometer"
                size={20}
                color={`${focused ? color : "#404040"}`}
              />
            )
          }}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedTestsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="check-circle"
                size={20}
                color={`${focused ? color : "#404040"}`}
              />
            )
          }}
        />
        <Tab.Screen
          name="Connect"
          component={ConnectLoggerScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="briefcase-plus-outline"
                size={20}
                color={`${focused ? color : "#404040"}`}
              />
            )
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name="call"
                size={20}
                color={`${focused ? color : "#404040"}`}
              />
            )
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitle: getHeaderTitle(route), //route.name,
        headerShown: true,
        headerLeft: (props) => (
          <Icon
            name="bars"
            onPress={navigation.toggleDrawer}
            style={{ paddingLeft: 10 }}
            size={25}
            color="#fff"
          />
        ),
        drawerActiveTintColor: "#53A020",
        contentOptions: {
          activeTintColor: "#53A020",
          activeBackgroundColor: "transparent",
          inactiveTintColor: "#ffffff"
        }
      })}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
              <ImageBackground
                source={logo}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  marginBottom: 20,
                  backgroundColor: "white"
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                ></Text>
              </ImageBackground>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          </View>
        );
      }}
    >
      {/* Screens go here */}
      <Drawer.Screen
        name="Create New Test"
        component={TabNavigator}
        // initialParams={{screen: 'HomeScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Icon
              name="plus-circle"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation, route }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            // Do something with the `navigation` object
            navigation.navigate("New Test");
          }
        })}
      />
      <Drawer.Screen
        name="Running Tests"
        component={TabNavigator}
        initialParams={{ screen: "RunningTestsScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Icon
              name="tachometer"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation, route }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("Running");
          }
        })}
      />
      <Drawer.Screen
        name="Completed Tests"
        component={TabNavigator}
        initialParams={{ screen: "CompletedTestsScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Icon
              name="check-circle"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation, route }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("Completed");
          }
        })}
      />
      <Drawer.Screen
        name="Connect Logger"
        component={TabNavigator}
        initialParams={{ screen: "ConnectLoggerScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="briefcase-plus-outline"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation, route }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("Connect");
          }
        })}
      />
      <Drawer.Screen
        name="Contact Us"
        component={TabNavigator}
        initialParams={{ screen: "ContactScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialIcons
              name="call"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation, route }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("Contact");
          }
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{ screen: "SettingsScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Icon
              name="gear"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutModal}
        initialParams={{ screen: "LogoutScreen" }}
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialIcons
              name="logout"
              size={20}
              color={`${focused ? color : "#404040"}`}
            />
          ),
          headerStyle: {
            backgroundColor: "#53A020"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "left"
        }}
        listeners={({ navigation }) => ({
          state: (e) => {
            if (e.data.state.index === 6) {
              // 6 is index of logout item in drawer
              handleLogout();
            }
          }
        })}
      />
    </Drawer.Navigator>
  );
}

export default HamburgerMenuDrawer;
