import * as React from "react";
import { View, Text, FlatList } from "react-native";
import TestCardItem from "../../components/test-card-item/TestCardItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

function CompletedTestsScreen() {
  const [active, setActive] = React.useState("");

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <TestCardItem />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default CompletedTestsScreen;
