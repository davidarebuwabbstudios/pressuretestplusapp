import * as React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import GaugeChart from "../../../components/guage-chart/GaugeChart";
import { Formik } from "formik";
import InputText from "../../../components/input-text/InputText";
import MaterialCommunityIcons from "react-native-vector-icons/FontAwesome";

import { Button, Modal, Portal } from "react-native-paper";
import CompletionModal from "../../../components/modals/CompletionModal";
import styles from "./styles";

type RootStackParamList = {
  TypeOneWaterVolumeScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeOneWaterVolumeScreen"
>;

type WaterVolumeFormValues = {
  waterVolume: string;
};

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

function WaterVolumeScreen({ navigation }: Props) {
  const initialValues: WaterVolumeFormValues = {
    waterVolume: ""
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          //alert(JSON.stringify(values, null, 2));
          //handleSubmit(values)
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <ScrollView style={styles.scrollView}>
              <View style={styles.isoMainFlexBox}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.pressureReadingTest]}>
                    {`Vent water from main via a flow meter or\ninto an accurate water volume container until the previous decayed pressure has been reached.\n\n`}
                    <Text style={[styles.pressureReadingTest]}>
                      {"Pressure Reading after 1 hour decay:\n"}
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
              <InputText
                name="waterVolume"
                label="Confirm value of water vented (litres)"
              />

              <View style={styles.typography1}>
                <View style={styles.formcontrollabelSwitch1}>
                  <View>
                    <Text
                      style={[
                        styles.uploadWaterVolumeContainer,
                        styles.waterContainerTypo
                      ]}
                    >
                      <Text
                        style={[styles.uploadWaterVolume, styles.waterLayout]}
                      >{`Upload Water Volume

`}</Text>
                      <Text style={[styles.text1, styles.text1Layout]}>{`


`}</Text>
                    </Text>
                    <View style={styles.buttongroupParent}>
                      <Pressable
                        style={[styles.buttongroup, styles.paperShadowBox]}
                        onPress={() => {}}
                      >
                        <View style={styles.buttonSpaceBlock}>
                          <View style={styles.base}>
                            <Text style={[styles.button1, styles.buttonClr]}>
                              UPLOAD
                            </Text>
                            <Image
                        style={[styles.maskedIcon, styles.maskedIconLayout]}
                        resizeMode="cover"
                        source={require("../../../src/assets/svgs/IconLeft.png")}
                      />
                            {/* <MaterialCommunityIcons
                              name="chevron-down"
                              size={20}
                              color="#fff"
                            /> */}
                          </View>
                        </View>
                      </Pressable>

                      <View style={styles.typography2}>
                        <Text style={[styles.body1, styles.body1Typo]}>
                          No media uploaded
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.view2}>
              <Button
                style={[styles.text2]}
                onPress={() => {
                  navigation.push("Data Summary");
                }}
                textColor="white"
              >
                {"CONTINUE"}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default WaterVolumeScreen;
