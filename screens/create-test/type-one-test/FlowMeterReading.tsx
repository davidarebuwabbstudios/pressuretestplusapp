import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
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

function FlowMeterReading({ navigation }: Props) {
  const initialValues: FlowMeterReadingFormValues = {
    meterReading: ""
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
                    {
                      "Maintain test pressure within the main for 1\n hour, by additional pumping if needed\n\nPressure Maintenance phase now complete,\n please confirm volume of water needed to\n maintain STP"
                    }
                  </Text>
                </View>
              </View>

              <>
                <InputText
                  name="pipeLength"
                  label="Confirm Flow Meter Reading (litres)"
                />
              </>
            </ScrollView>
            <View style={[styles.view2, {}]}>
              <Button
                style={styles.text2}
                onPress={() => navigation.push("Flow Timer")}
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

export default FlowMeterReading;
