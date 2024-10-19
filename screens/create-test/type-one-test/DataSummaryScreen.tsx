import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import TableExample from "../../../components/table/DataTable";
import RootComponent from "../../../components/root/RootComponent";
import { TextInput, Button, Switch } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/FontAwesome";
import styles from "./styles";



type RootStackParamList = {
    TypeOneTestDataSummaryScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "TypeOneTestDataSummaryScreen">;


function TypeOneTestDataSummaryScreen({ navigation }: Props) {
  const [active, setActive] = React.useState("");




  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.headerFlexBox}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.provideYourTest,
                { textAlign: "center", margin: 8 }
              ]}
            >
              {"Test Reference: Test2502-1\n\n"}
              <Text
                style={[
                  styles.provideYourTest,
                  { textAlign: "center", margin: 8 }
                ]}
              >
                {"Data Summary"}
              </Text>
            </Text>
          </View>
        </View>
        <View>
      <TableExample />
      <View style={styles.headerFlexBox}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.provideYourTest,
                { textAlign: "center", margin: 8 }
              ]}
            >
              {`If you are happy with this summary of 
recorded values then click on the button 
below to complete your test`}
              
            </Text>
          </View>
        </View>
    </View>
      </ScrollView>
      <View style={[styles.view2, {}]}>
        <Button
          style={styles.text2}
          onPress={() => navigation.push("Complete Type One Test")}
          textColor="white"
        >
          {"COMPLETE TEST"}
        </Button>
      </View>
    </View>
  );
}

export default TypeOneTestDataSummaryScreen;
