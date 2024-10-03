import * as React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles";

function HomeScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column", paddingTop: 20 }}>
        <Pressable
        style={[ styles.buttonShadowBox]}
        onPress={() => {}}
      >
        <View style={[styles.base, styles.mainFlexBox]}>
          <Text style={[styles.button1, styles.opFlexBox]}>{`START TYPE I TEST
(WATER LOSS - DUCTILE IRON/GRP)`}</Text>
        </View>
      </Pressable>
      <Pressable
        style={[ styles.buttonShadowBox]}
        onPress={() => {}}
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
