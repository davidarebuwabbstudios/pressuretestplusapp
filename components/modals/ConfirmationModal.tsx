import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";

type ConfirmationModalProps = {
  visible: boolean;
};


const ConfirmationModal = () => { //{ visible }: ConfirmationModalProps

    const handleSubmit = () => {
        console.log("Pressed")
    }
  return (
    <>
      <View
        style={[styles.prePressurisationChecksChild]}
      />
        {/* <View style={styles.typography4}> */}
          <Text style={[styles.body13]}>
            <Text style={styles.confirmation}>
              <Text style={styles.confirmation1}>{`
Confirmation
`}</Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text
              style={[styles.pleaseConfirmThat, styles.pleaseConfirmThatTypo]}
            >{`Please confirm that flow meter is 
connected and reads zero`}</Text>
          </Text>
          <View style={styles.buttonParent}>
            <View style={styles.buttonShadowBox}>
              <Button
                style={[styles.text2]}
                onPress={handleSubmit}
                textColor="white"
              >
                {"NO"}
              </Button>
            </View>

            <View style={styles.buttonShadowBox}>
              <Button
                style={[styles.text2]}
                onPress={handleSubmit}
                textColor="white"
              >
                {"YES"}
              </Button>
            </View>
          </View>
        {/* </View> */}
    </>
  );
};

export default ConfirmationModal;
