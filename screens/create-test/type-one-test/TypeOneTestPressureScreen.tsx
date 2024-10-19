import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";
import DropDownField from "../../../components/dropdown-field/DropdownField";
import { Formik } from "formik";
import RootComponent from "../../../components/root/RootComponent";
import { TextInput, Button, Switch } from "react-native-paper";
import styles from "./styles";

type RootStackParamList = {
  TypeOneTestDetails: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "TypeOneTestDetails">;

type TestDetailsFormValues = {
  testPressure: string;
  pipeElevation: string;
  loggerElevation: string;
};

function TypeOneTestPressureScreen({ navigation }: Props) {
  const [active, setActive] = React.useState("");

  const initialValues: TestDetailsFormValues = {
    testPressure: "",
    pipeElevation: "",
    loggerElevation: ""
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
              <View style={styles.headerFlexBox}>
                <View>
                  <Text style={[styles.provideYourTest, styles.testLayout]}>
                    Provide your Test Pressure, we’ll then generate your System
                    Test Pressure with static head adjustments
                  </Text>
                </View>
              </View>
              <View style={styles.formFlexBox}>
                <>
                  <InputText
                    name="pipeLength"
                    label="Enter your Test pressure (bar)"
                  />
                  <InputText name="pipeElevation" label="Pipe Elevation (m)" />
                  <InputText
                    name="loggerElevation"
                    label="Logger Elevation (m)"
                  />

                  <View>
                    <Text style={styles.testLayout}>
                      <Text style={styles.elevationAdjustmentsTestPr}>
                        <Text
                          style={[styles.elevationAdjustments, styles.yourTypo]}
                        >{`Elevation Adjustments

`}</Text>
                        <Text
                          style={[styles.testPressure, styles.helperTextTypo1]}
                        >{`Test Pressure + ((Pipe Elevation - Logger Elevation) * 0.1)

`}</Text>
                        <Text style={styles.yourTypo}>
                          <Text
                            style={styles.bar1m}
                          >{`10 bar + ((1m - 5m) * 0.1)

`}</Text>
                        </Text>
                      </Text>
                      <Text style={styles.yourTypo}>
                        <Text
                          style={[styles.yourActualTest, styles.yourLayout]}
                        >{`Your actual test pressure will be 
9.6 bar`}</Text>
                      </Text>
                    </Text>
                  </View>
                </>
              </View>
            </ScrollView>
            <View style={[styles.view2, { marginTop: 30 }]}>
              <Button
                style={styles.text2}
                onPress={() => navigation.push("Type One Flow Rate")}
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

export default TypeOneTestPressureScreen;
