import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Drawer as PaperDrawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../../screens/home/HomeScreen";
import RunningTestsScreen from "../../screens/running-tests/RunningTestsScreen";
import CompletedTestsScreen from "../../screens/completed-tests/CompletedTestsScreen";
import ConnectLoggerScreen from "../../screens/connect-logger/ConnectLoggerScreen";
import ContactScreen from "../../screens/contact/ContactScreen";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import LogoutModal from "../logout/LogoutModal";
import * as authActions from  "../../core/actions/authActions";
import BottomTabs from "../bottom-tab-menu/BottomTabMenu";

const logo = require("../../assets/bootsplash/main-logo.png");

const HamburgerDrawer = () => {
  const [active, setActive] = React.useState("");

  return (
    <PaperDrawer.Section title="Some title">
      <PaperDrawer.Item
        label="First Item"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <PaperDrawer.Item
        label="Second Item"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </PaperDrawer.Section>
  );
};

function HamburgerMenuDrawer() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth);
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();


  const handleLogout = () => {
    dispatch(authActions.setAuthToken(false));
}
  const screenOptionStyle = {
    headerShown: false
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#53A020',
          tabBarInactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="New Test" component={HomeScreen} options={
          {
            tabBarIcon: ({ color, focused }) => <Icon name="plus-circle" size={20} color={`${focused ? color : '#404040'}`}/>,
          }
        } />
        <Tab.Screen name="Running" component={RunningTestsScreen} options={
          {
            tabBarIcon: ({ color, focused }) => <Icon name="tachometer" size={20} color={`${focused ? color : '#404040'}`}/>,
          }
        } />
        <Tab.Screen name="Completed" component={CompletedTestsScreen} options={
          {
            tabBarIcon: ({ color, focused }) => <Icon name="check-circle" size={20} color={`${focused ? color : '#404040'}`}/>,
          }
        } />
        <Tab.Screen name="Connect" component={ConnectLoggerScreen} options={
          {
            tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="briefcase-plus-outline" size={20} color={`${focused ? color : '#404040'}`}/>,
          }
        } />
        <Tab.Screen name="Contact" component={ContactScreen} options={
          {
            tabBarIcon: ({ color, focused }) => <MaterialIcons name="call" size={20} color={`${focused ? color : '#404040'}`}/>,
          }
        } />
      </Tab.Navigator>
    );
  };
 

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: (props) => (
          <Icon
            name="bars"
            onPress={navigation.toggleDrawer}
            style={{ paddingLeft: 10 }}
            size={25}
            color="#fff"
          />
        ),
        drawerActiveTintColor:'#53A020',
        contentOptions: {
          activeTintColor: '#53A020',
          activeBackgroundColor : 'transparent',
          inactiveTintColor : '#ffffff',
          },
      
      })}
      drawerContent={(props)=> {
        return(
            <View style={{flex:1}}>
                <DrawerContentScrollView {...props}>
                    <ImageBackground source={logo} style={{justifyContent:"center",alignItems:"center",padding:10,marginBottom:20,backgroundColor:"white"}}>
                        <Text style={{fontSize:20,fontWeight:"bold",color:'white'}}></Text>
                    </ImageBackground>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>
            </View>
        )
    } 
 }    >
      {/* Screens go here */}
      <Drawer.Screen
        name="New Test"
        component={TabNavigator}
        initialParams={{screen: 'HomeScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <Icon name="plus-circle" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name="Running Tests"
        component={TabNavigator}
        initialParams={{screen: 'RunningTestsScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <Icon name="tachometer" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name="Completed Tests"
        component={TabNavigator}
        initialParams={{screen: 'CompletedTestsScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <Icon name="check-circle" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
       <Drawer.Screen
        name="Connect Logger"
        component={TabNavigator}
        initialParams={{screen: 'ConnectLoggerScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <MaterialCommunityIcons name="briefcase-plus-outline" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={TabNavigator}
        initialParams={{screen: 'ContactScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <MaterialIcons name="call" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{screen: 'SettingsScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <Icon name="gear" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutModal}
        initialParams={{screen: 'LogoutScreen'}}
        options={{
          drawerIcon: ({ color, focused }) => <MaterialIcons name="logout" size={20} color={`${focused ? color : '#404040'}`}/>,
          headerStyle: {
            backgroundColor: '#53A020',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left'
        }}
        listeners={({ navigation }) => ({ 
          state: (e) => {
             if (e.data.state.index === 6) {
                // 6 is index of logout item in drawer
                handleLogout()
             }
          }
        })
      }
      />
    </Drawer.Navigator>
  );
}

export default HamburgerMenuDrawer;
