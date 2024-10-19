import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import styles from "./styles";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({navigation}: Props) {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 20 }}>
        <Pressable
        style={[ styles.buttonShadowBox]}
        onPress={() => navigation.push("Type One Test Details")}
      >
        <View style={[styles.base, styles.mainFlexBox]}>
          <Text style={[styles.button1, styles.opFlexBox]}>{`START TYPE I TEST
(WATER LOSS - DUCTILE IRON/GRP)`}</Text>
        </View>
      </Pressable>
      <Pressable
        style={[ styles.buttonShadowBox]}
        onPress={() => navigation.push("Type Two Test Details")}
      >
        <View style={[styles.base, styles.mainFlexBox]}>
          <Text style={[styles.button1, styles.opFlexBox]}>{`START TYPE II TEST
(POLYETHYLENE)`}</Text>
        </View>
      </Pressable>
      </View>
    </>
  );
}

export default HomeScreen;
