import * as React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import InputText from "../../components/input-text/InputText";
import styles from "./styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function RegisterScreen({navigation}: Props) {
  return (
    <AuthWrapper>
      <>
      <InputText label="First Name" />
      <InputText label="Surname" />
      <InputText label="Telephone Number" />
      <InputText label="Email Address" />
      <InputText label="Password" />
      <InputText label="Confirm Password" />
      </>
      <View style={styles.view2}>
        <Button
          style={styles.text2}
          textColor="white"
          onPress={() => navigation.navigate("Home")}
        >
          {"REGISTER"}
        </Button>
      </View>
      <View style={styles.view3}>
        <Text
          style={styles.textAlt}
          onPress={() => navigation.goBack()}
        >
          Already Registered? Login
        </Text>
      </View>
    </AuthWrapper>
  );
}

export default RegisterScreen;
