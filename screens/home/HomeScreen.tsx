import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  useColorScheme,
  View,
} from "react-native";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";


type RootStackParamList = {
    Home: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;



const logo = require("../../assets/bootsplash/main-logo.png");

function HomeScreen({navigation} : Props) {
  return (
    <AuthWrapper>
        <View style={styles.view}>
          <TextInput label={"Email address"} style={styles.text} />
        </View>
        <View style={styles.view}>
          <TextInput label={"Password"} style={styles.text} />
        </View>
        <View style={styles.view2}>
          <Button style={styles.text2}
          textColor="white"
          >{"LOGIN"}</Button>
        </View>
        <View style={styles.view3}>
          <Button style={styles.text2}
          textColor="white"
          onPress={() => navigation.push('Register')}
          >{"REGISTER"}</Button>
        </View>
      </AuthWrapper>
  );
}

export default HomeScreen;
