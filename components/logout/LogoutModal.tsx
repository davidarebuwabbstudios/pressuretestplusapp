import * as React from "react";
import { View, Text } from "react-native";

function LogoutModal() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Logout </Text>
      </View>
    </>
  );
}

export default LogoutModal;
