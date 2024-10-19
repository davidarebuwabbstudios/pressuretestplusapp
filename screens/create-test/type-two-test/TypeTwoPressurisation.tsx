import * as React from "react";
import { View, Text, ScrollView, Animated, Easing } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";
import GaugeChart from "../../../components/guage-chart/GaugeChart";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import { Button, Modal, Portal } from "react-native-paper";
import Toast from 'react-native-toast-message';

import styles from "./styles";

type RootStackParamList = {
  TypeTwoPressurisationScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeTwoPressurisationScreen"
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

function TypeTwoPressurisationScreen({ navigation }: Props) {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [pressureState, setPressureState] = React.useState("idle");
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const showModal = () => setmodalVisible(true);
  const hideModal = () => setmodalVisible(false);

  const showToast = (type: string, text1: string, text2: string) => {
    Toast.show({
      type,
      text1,
      text2
    });
  }

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 4
  };

const handleStartPressureStableCheck = () => {

}

  const handleSubmit = () => {
    console.log("-----Pressed", pressureState);
    if (pressureState === "starting") {

    }
    switch (pressureState) {
      case "idle":
        console.log("idle to starting");
        setPressureState("starting");
      case "starting":
        console.log("starting to stable");
        animateProgressBar();
      case "stable":
        console.log("idle to starting");
        //hideModal();
        //navigation.navigate("Flow Meter Reading");
      default:
        console.log("Pressed", pressureState);
      // hideModal();
      // navigation.navigate("Flow Meter Reading");
    }
  };

  const CompletionModal = () => {
    switch (pressureState) {
      case "starting":
        return (
          <>
            <View style={[styles.prePressurisationChecksChild]} />
            <Text
              style={[styles.modalBody]}
            >{`Please wait while we ensure the pressure is stable`}</Text>
            <ProgressBar value={0.7} duration={1000} ease="easeInQuad" />
          </>
        );
      case "stable":
        return (
          <>
            <View style={[styles.prePressurisationChecksChild]} />
            <Text
              style={[styles.modalBody]}
            >{`Pressure is stable, please ensure the water pump has been turned off and close the ball valve to prevent pressure loss`}</Text>
            <View style={styles.buttonParent}>
              <View style={styles.completionButtonShadowBox}>
                <Button
                  style={[styles.text2]}
                  onPress={handleSubmit}
                  textColor="white"
                >
                  {"OK"}
                </Button>
              </View>
            </View>
            {/* </View> */}
          </>
        );
      default:
        return (
          <>
            <View style={[styles.prePressurisationChecksChild]} />
            <Text
              style={[styles.modalBody]}
            >{`It’s time to start pressurising the pipeline. When ready, press start and gradually increase
the pressure within the pipe until the pressure gauge indicates your target pressure, be sure to 
keep an eye on the gauge to avoid over pressurisation
            `}</Text>
            <View style={styles.buttonParent}>
              <View style={styles.completionButtonShadowBox}>
                <Button
                  style={[styles.text2]}
                  onPress={handleSubmit}
                  textColor="white"
                >
                  {"START"}
                </Button>
              </View>
            </View>
            {/* </View> */}
          </>
        );
    }
  };

  const animateProgressBar = () => {
    Animated.timing(progress, {
      toValue: 300,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(({ finished }) => {
      if (finished) {
        console.log("animation ended:", pressureState);
        showToast('success', `Pressure stable `, 'Ensure the water pump has been turned off')
        navigation.push("Type Two Test Progress")
        hideModal()
        if (pressureState === "starting"){
            console.log("resetting...");
        const reset = new Animated.Value(0)
        setProgress(reset);
      // setPressureState("stable");

        }
      }
    });
  };

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
      <View style={{ alignItems: "center", marginVertical: 40 }}>
        <GaugeChart
          value={26}
          labels={labels}
          size={200}
          needleImage={needleImage}
        />
        <View
          style={{
            justifyContent: "center",
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
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "column"
          }}
        >
          <Text style={[styles.readingLayout]}>
            {`Target pressure: 9.6 bar\n`}
            <Text style={[styles.readingLayout]}>
              {`Do not exceed: 20 bar\n`}
            </Text>
            <Text style={[styles.readingLayout]}>
              {`BLUEBOX 4491 Connected\n`}
            </Text>
          </Text>
        </View>
        <Button style={[styles.text2]} onPress={showModal}>
          {"CONTINUE"}
        </Button>
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
  );
}

export default TypeTwoPressurisationScreen;
