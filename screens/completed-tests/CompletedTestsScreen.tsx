import * as React from "react";
import { View, Text } from "react-native";

function CompletedTestsScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Completed Tests</Text>
      </View>
    </>
  );
}

export default CompletedTestsScreen;
