import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";
import GaugeChart from "../../../components/guage-chart/GaugeChart";

import { Button, Modal, Portal } from "react-native-paper";
import CompletionModal from "../../../components/modals/CompletionModal";
import styles from "./styles";

type RootStackParamList = {
  TypeOnePressurisationScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeOnePressurisationScreen"
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




function PressurisationScreen({ navigation }: Props) {
  const [modalVisible, setmodalVisible] = React.useState(false);

  const showModal = () => setmodalVisible(true);
  const hideModal = () => setmodalVisible(false);

  const containerStyle = { backgroundColor: "white", padding: 20, borderRadius: 4 };

  const handleSubmit = () => {
    console.log("Pressed")
    hideModal()
    navigation.navigate("Flow Meter Reading")
}

  const CompletionModal = () => {
    return (
<>
      <View
        style={[styles.prePressurisationChecksChild]}
      />
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
}


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.headerFlexBox}>
        <View>
          <Text style={[styles.provideYourTest, styles.testLayout]}>
            {
              "Please stay connected to the logger \n\n Please ensure input valves on manifold/pipe remain open during pressurisation."
            }
          </Text>
        </View>
      </View>
      <View style={{ alignItems:'center', marginVertical: 40 }}>
        <GaugeChart
          value={26}
          labels={labels}
          size={200}
          needleImage={needleImage}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 20,
            flexDirection: "column"
          }}
        >
          <Text style={[styles.yourActualTest, styles.readingLayout]}>
            {`4.490 bar\n`}
            <Text style={[styles.yourActualTest, styles.readingDesc]}>
            {`45.490 meter\n`}
          </Text>
          <Text style={[styles.yourActualTest, styles.readingDesc]}>
            {`Last reading: 18:06:01\n`}
          </Text>
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 20,
            flexDirection: "column"
          }}
        >
          <Text style={[styles.readingLayout]}>
            {`Target pressure: 9.6 bar\n`}
            <Text style={[ styles.readingLayout]}>
            {`Do not exceed: 20 bar\n`}
          </Text>
          <Text style={[styles.readingLayout]}>
            {`BLUEBOX 4491 Connected\n`}
          </Text>
          </Text>
        </View>
        <Button
                style={[styles.text2]}
                onPress={showModal}
              >
                {"CONTINUE"} 
              </Button>
      </View>
     

      <>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={{padding: 20}}
          >
            <CompletionModal />
          </Modal>
        </Portal>
      </>
    </ScrollView>
  );
}

export default PressurisationScreen;
