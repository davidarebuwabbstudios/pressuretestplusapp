import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import InputText from "../../../components/input-text/InputText";
import TextButtonGroup from "../../../components/text-button-group/TextButtonGroup";
import { Button, Modal, Portal } from "react-native-paper";
import CompletionModal from "../../../components/modals/CompletionModal";
import styles from "./styles";

type RootStackParamList = {
  CompleteTypeTwoTestScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "CompleteTypeTwoTestScreen"
>;

type CompleteTypeTwoTestScreenFormValues = {
  additionalComments: string;
};

function CompleteTypeTwoTestScreen({ navigation }: Props) {
  const initialValues: CompleteTypeTwoTestScreenFormValues = {
    additionalComments: ""
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
                      {"Result: Fail\n\n"}
                    </Text>
                    <Text
                      style={[
                        styles.provideYourTest,
                        { textAlign: "center", marginTop: 12 }
                      ]}
                    >
                      {
                        "N2 over N1 is > N1 - 0.0215338424 should lie between 0.04 and 0.1\n\n"
                      }
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={styles.pressureFormFlexBox}>
                <TextButtonGroup
                  label={"Do you agree with the results of this test?"}
                  options={"YES,NO"}
                />
              </View>
              <Text
                    style={[
                      styles.provideYourTest,
                      { textAlign: "left", margin: 8 }
                    ]}
                  >
                    {"Provide additional comments"}
                    </Text>
              <InputText
                name="additionalComments"
                label="Enter additional comments here"
                multiline={true}
              />
            </ScrollView>
            <View style={[styles.view2, {}]}>
              <Button
                style={styles.text2}
                onPress={() => navigation.navigate("Completed")}
                textColor="white"
              >
                {"COMPLETE TEST"}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default CompleteTypeTwoTestScreen;
