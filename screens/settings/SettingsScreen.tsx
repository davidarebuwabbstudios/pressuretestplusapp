import * as React from "react";
import { View, Text } from "react-native";

function SettingsScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings </Text>
      </View>
    </>
  );
}

export default SettingsScreen;
