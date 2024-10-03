import * as React from "react";
import { View, Text } from "react-native";

function NewTestScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>New Test</Text>
      </View>
    </>
  );
}

export default NewTestScreen;
