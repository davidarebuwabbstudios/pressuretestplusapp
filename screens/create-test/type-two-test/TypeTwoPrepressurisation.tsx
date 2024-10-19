import * as React from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Modal, Portal, Button } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import TextButtonGroup from "../../../components/text-button-group/TextButtonGroup";
import TypeTwoCompletionModal from "../../../components/modals/TypeTwoConfirmationModal";
import styles from "./styles";

type RootStackParamList = {
  TypeTwoTestPrepressurisation: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  "TypeTwoTestPrepressurisation"
>;

type TestDetailsFormValues = {
  flowRate: string;
};

function TypeTwoTestPrepressurisationScreen({ navigation }: Props) {
  const [active, setActive] = React.useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  const [formFilled, setFormFilled] = React.useState(false);

  const [modalVisible, setmodalVisible] = React.useState(false);

  const showModal = () => setmodalVisible(true);
  const hideModal = () => setmodalVisible(false);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 4
  };

  const initialValues: TestDetailsFormValues = {
    flowRate: ""
  };

  const toggleFormFilled = () => {
    setFormFilled(!formFilled);
  };

  const handleConfirmation = () => {
    //showModal()
    navigation.push("Type Two Pressurisation");
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.pressureFormFlexBox}>
          <TextButtonGroup
            label={"Pipeline has less than 4% air content?"}
            options={"YES,NO"}
          />
          <TextButtonGroup
            label={"Vents are open on the highest elevation"}
            options={"YES,NO"}
          />
          <TextButtonGroup
            label={"Swabbing considered to clean remove air"}
            options={"YES,NO"}
          />
        </View>
        <View style={styles.typography}>
          <Text
            style={[styles.duringPressurisationYouContainer, styles.body1Typo]}
          >
            <Text
              style={styles.duringPressurisationYou}
            >{`\n During pressurisation, you must stay connected to the logger. \n If the logger is disconnected we will reconnect when you start pressurisation.
`}</Text>
            <Text style={styles.bluebox4491Disconnected}>{`
BLUEBOX 4491 Disconnected

`}</Text>
          </Text>
        </View>

        <>
          <Portal>
            <Modal
              visible={modalVisible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
              style={{ padding: 20 }}
            >
              <TypeTwoCompletionModal />
            </Modal>
          </Portal>
        </>
      </ScrollView>
      <View style={[styles.view4]}>
        <Button
          style={styles.text2}
          onPress={handleConfirmation}
          textColor="white"
        >
          {"START PRESSURISATION"}
        </Button>
      </View>
    </View>
  );
}

export default TypeTwoTestPrepressurisationScreen;
