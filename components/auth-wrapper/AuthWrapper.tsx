// This the wrapper that covers both the register and login screens
import React from "react";
import { ScrollView, Image, View } from "react-native";
import RootComponent from "../root/RootComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface RootComponentProps {
  children: React.ReactNode;
}
const logo = require("../../assets/bootsplash/main-logo.png");

const AuthWrapper: React.FC<RootComponentProps> = (props) => {
  return (
    <RootComponent>
      <ScrollView style={styles.scrollView}>
        <Image source={logo} resizeMode={"contain"} style={styles.image} />
        {props.children}
      </ScrollView>
    </RootComponent>
  );
};

export default AuthWrapper;
