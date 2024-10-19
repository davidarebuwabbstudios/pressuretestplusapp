import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import GaugeChart from "../../../components/guage-chart/GaugeChart";

import { Button, Modal, Portal } from "react-native-paper";
import CompletionModal from "../../../components/modals/CompletionModal";
import styles from "./styles";

type RootStackParamList = {
  TypeOneSystemPressure: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeOneSystemPressure"
>;

const labels: Label[] = [
  {
    name: "Pathetically weak",
    labelColor: "#ff2900",
    activeBarColor: "#FF8550"
  },
  {
    name: "Very weak",
    labelColor: "#ff5400",
    activeBarColor: "#EC6725"
  },
  {
    name: "So-so",
    labelColor: "#f4ab44",
    activeBarColor: "#FF6600"
  },
  {
    name: "Fair",
    labelColor: "#f2cf1f",
    activeBarColor: "#6F9146"
  },
  {
    name: "Strong",
    labelColor: "#14eb6e",
    activeBarColor: "#619700"
  },
  {
    name: "Unbelievably strong",
    labelColor: "#00ff6b",
    activeBarColor: "#6F9D21"
  }
];

const needleImage = require("../../../src/assets/svgs/speedometer_1.png");

function SystemPressureScreen({ navigation }: Props) {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.isoMainFlexBox}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.pressureReadingTest]}>
              {
                "Reconnect pump and begin pumping water via a flow meter into the pipe until you reach\nSystem Test Pressure again.\n\n"
              }
              <Text style={[styles.pressureReadingTest]}>
                {"System Test Pressure:\n"}
              </Text>
              <Text style={styles.bar}>{`8.7 bar
`}</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            paddingHorizontal: 40
          }}
        >
          <GaugeChart
            value={26}
            labels={labels}
            size={120}
            needleImage={needleImage}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              flexDirection: "column",
              paddingLeft: 20
            }}
          >
            <Text style={[styles.yourActualTest, styles.readingDesc]}>
              {`Current Pressure\n`}
              <Text style={[styles.yourActualTest, styles.readingLayout]}>
                {`4.490 bar\n`}
                <Text style={[styles.yourActualTest, styles.readingDesc]}>
                  {`45.490 meter\n`}
                </Text>
                <Text style={[styles.yourActualTest, styles.readingDesc]}>
                  {`Last reading: 18:06:01\n`}
                </Text>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.view2}>
        <Button
          style={[styles.text2]}
          onPress={() => {
            navigation.push("Water Volume");
          }}
          textColor="white"
        >
          {"CONTINUE"}
        </Button>
      </View>
    </View>
  );
}

export default SystemPressureScreen;
