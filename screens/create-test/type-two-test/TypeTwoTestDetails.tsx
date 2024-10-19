import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";
import ToolTipTextField from "../../../components/tooltip-textfield/ToolTipTextField";
import DropDownField from "../../../components/dropdown-field/DropdownField";
import { Formik } from "formik";
import { Button, Switch } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import * as Yup from "yup";

type RootStackParamList = {
  TypeTwoTestDetails: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "TypeTwoTestDetails">;

type TestDetailsFormValues = {
  jobReference: string;
  pipeMaterial: string;
  pipeSDR: string;
  pipeDiameter: string;
  pipeLength: string;
  pipeLineBackfill: string;
};

const OPTIONS = [
  { label: "Ductile Iron", value: "ductile-iron" },
  { label: "GRP", value: "grp" }
];

function TypeTwoTestDetailsScreen({ navigation }: Props) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const initialValues: TestDetailsFormValues = {
    jobReference: "",
    pipeMaterial: "",
    pipeSDR: "",
    pipeDiameter: "",
    pipeLength: "",
    pipeLineBackfill: ""
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
              <ToolTipTextField name="jobReference" label="Job Reference" />
              <DropDownField
                placeholder="Select A Pipe Material"
                options={OPTIONS}
              />
              <DropDownField
                placeholder="Select A Pipe SDR"
                options={OPTIONS}
              />
              <DropDownField
                placeholder="Select A Pipe Diameter"
                options={OPTIONS}
              />
              <InputText name="pipeLength" label="Enter pipe length (m)" />
              <View
                style={[styles.formcontrollabelSwitch, styles.switchFlexBox]}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "flex-start" }}
                >
                  <Text style={[styles.pipelineBackFilled, styles.textTypo]}>
                    Pipeline back-filled?
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.switch1}>
                    <Switch
                      value={isSwitchOn}
                      color="#6F8E42"
                      onValueChange={onToggleSwitch}
                      style={{ margin: 8 }}
                    />
                    <MaterialCommunityIcons
                      name="info-circle"
                      size={20}
                      color="#2196F3"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={[styles.view2, {}]}>
              <Button
                style={styles.text2}
                onPress={() => navigation.push("Type Two Test Pressure")}
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

export default TypeTwoTestDetailsScreen;
