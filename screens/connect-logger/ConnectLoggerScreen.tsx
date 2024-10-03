import * as React from "react";
import { View, Text } from "react-native";

function ConnectLoggerScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Connect Logger</Text>
      </View>
    </>
  );
}

export default ConnectLoggerScreen;
