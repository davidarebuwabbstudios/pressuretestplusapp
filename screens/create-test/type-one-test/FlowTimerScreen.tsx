import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

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

function FlowTimerScreen({ navigation }: Props) {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 4
  };

  const showModal = () => setmodalVisible(true);
  const hideModal = () => setmodalVisible(false);

  const initialValues: FlowMeterReadingFormValues = {
    meterReading: ""
  };

  const handleSubmit = () => {
    console.log("Pressed");
    hideModal();
    navigation.push("Isolate Main");
  };

  const CompletionModal = () => {
    return (
      <>
        <View style={[styles.prePressurisationChecksChild]} />
        {/* <View style={styles.typography4}> */}
        <Text style={[styles.body13]}>
          <Text style={[styles.confirmation]}>
            <Text style={styles.confirmation1}>{`
System Test Pressure (STP)\n
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text
            style={[styles.pleaseConfirmThat, styles.pleaseConfirmThatTypo]}
          >{`System Test Pressure reached, please switch off the pump and close off all valves`}</Text>
        </Text>

        <View style={styles.buttonParent}>
          <View style={styles.completionButtonShadowBox}>
            <Button
              style={[styles.text2]}
              onPress={handleSubmit}
              textColor="white"
            >
              {"CONTINUE"}
            </Button>
          </View>
        </View>
        {/* </View> */}
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerFlexBox}>
          <View>
            <Text
              style={[styles.decayPressurePhase, styles.blankLine5Layout]}
            >{`Decay Pressure Phase 
Time Remaining`}</Text>
          </View>
        </View>
        <View style={[styles.mdiclock, styles.mainFlexBox]}>
          <Text style={styles.timerText}>34:23:01</Text>
        </View>

        <>
          <Portal>
            <Modal
              visible={modalVisible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
              style={{ padding: 20 }}
            >
              <CompletionModal />
            </Modal>
          </Portal>
        </>
      </ScrollView>
      <View style={styles.view2}>
        <Button style={[styles.text2]} onPress={showModal} textColor="white">
          {"CONTINUE"}
        </Button>
      </View>
    </View>
  );
}

export default FlowTimerScreen;
