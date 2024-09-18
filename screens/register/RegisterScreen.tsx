import * as React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import styles from "./styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function RegisterScreen({navigation}: Props) {
  return (
    <AuthWrapper>
      <View style={styles.view}>
        <TextInput label={"First Name"} style={styles.text} />
      </View>
      <View style={styles.view}>
        <TextInput label={"Surname"} style={styles.text} />
      </View>
      <View style={styles.view}>
        <TextInput label={"Telephone Number"} style={styles.text} />
      </View>
      <View style={styles.view}>
        <TextInput label={"Email Address"} style={styles.text} />
      </View>
      <View style={styles.view}>
        <TextInput label={"Password"} style={styles.text} />
      </View>
      <View style={styles.view}>
        <TextInput label={"Confirm Password"} style={styles.text} />
      </View>
      <View style={styles.view2}>
        <Button
          style={styles.text2}
          textColor="white"
          onPress={() => navigation.navigate("Home")}
        >
          {"REGISTER"}
        </Button>
      </View>
    </AuthWrapper>
  );
}

export default RegisterScreen;
