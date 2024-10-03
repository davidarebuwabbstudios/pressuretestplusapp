import * as React from "react";
import { View, Text } from "react-native";

function RunningTestsScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Running Tests </Text>
      </View>
    </>
  );
}

export default RunningTestsScreen;
