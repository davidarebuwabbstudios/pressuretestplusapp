import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";

import { Button, Modal, Portal } from "react-native-paper";
import CompletionModal from "../../../components/modals/CompletionModal";
import styles from "./styles";

type RootStackParamList = {
    TypeOneFlowMeterReading: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeOneFlowMeterReading"
>;

type FlowMeterReadingFormValues = {
    meterReading: string;
  };

function IsolateMainScreen({navigation}: Props) {

    const initialValues: FlowMeterReadingFormValues = {
        meterReading: "",
      };


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.isoMainFlexBox}>
        <View style={{flex: 1}}>
          <Text style={[styles.pressureReadingTest]}>
            {
              "Main isolated and pressure decayed for\n1 hour\n\n"
            }
            <Text style={[styles.pressureReadingTest]}>
            {
              "Pressure reading after 1 hour decay:\n"
            }
          </Text>
          <Text style={styles.bar}>{`8.7 bar
`}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.isoMidFlexBox}>
        <View style={{flex: 1}}>
          <Text style={[styles.provideTheFlow]}>
            {
              "Has Flow Meter been reset to zero to allow for water volume to be recorded?"
            }
        </Text>
        </View>
        <View style={styles.buttonShadowBox}>
              <Button
                style={[styles.text2]}
                onPress={() => navigation.push("System Pressure")}
                textColor="white"
              >
                {"CONFIRM"}
              </Button>
            </View>
      </View>
    </ScrollView>
  );
}

export default IsolateMainScreen;
