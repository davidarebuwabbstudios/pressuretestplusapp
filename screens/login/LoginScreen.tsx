import * as React from "react";
import {
  View,
} from "react-native";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../components/input-text/InputText";
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;


function LoginScreen({ navigation }: Props) {
  return (
    <AuthWrapper>
      <>
        <InputText label="Email address" />
        <InputText label="Password" />
      </>
      <View style={styles.view2}>
        <Button style={styles.text2} textColor="white">
          {"LOGIN"}
        </Button>
      </View>
      <View style={styles.view3}>
        <Button
          style={styles.text2}
          textColor="white"
          onPress={() => navigation.push("Register")}
        >
          {"REGISTER"}
        </Button>
      </View>
    </AuthWrapper>
  );
}

export default LoginScreen;
