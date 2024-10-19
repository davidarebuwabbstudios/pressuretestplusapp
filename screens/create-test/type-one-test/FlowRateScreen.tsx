import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../../components/input-text/InputText";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import styles from "./styles";

type RootStackParamList = {
  TypeOneTestFlowRate: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "TypeOneTestFlowRate">;

type TestDetailsFormValues = {
  flowRate: string;
};

function TypeOneTestFlowRateScreen({ navigation }: Props) {
  const [active, setActive] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const initialValues: TestDetailsFormValues = {
    flowRate: ""
  };

  const handleConfirmation = () => {
    setIsModalVisible(true);
    console.log("setIsModalVisible", isModalVisible);
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
                  <Text style={[styles.provideTheFlow, styles.flowLayout]}>
                    Provide the flow rate of your pump in litres per minute so
                    we can estimate fill time
                  </Text>
                </View>
              </View>
              <View style={styles.formFlexBox}>
                <>
                  <InputText
                    name="flowRate"
                    label="Enter Flow rate (litres per minute)"
                  />
                  <View>
                    <Text
                      style={[styles.volumeV106026, styles.flowLayout]}
                    >{`Volume (V): 106.026
`}</Text>
                    <Text style={[styles.flowQ5Container, styles.flowLayout]}>
                      <Text style={styles.flowQ5}>{`Flow (Q): 5
`}</Text>
                      <Text style={styles.flowTypo}>{`
Estimated Fill Time (T): 21.2 minutes`}</Text>
                    </Text>
                  </View>
                </>
              </View>
            </ScrollView>
            <View style={[styles.view2, { marginTop: 30 }]}>
              <Button
                style={styles.text2}
                onPress={() => navigation.push("Type One Pressurisation")}
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

export default TypeOneTestFlowRateScreen;
