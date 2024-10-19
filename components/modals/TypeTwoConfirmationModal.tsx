import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";



const TypeTwoCompletionModal = () => { //{ visible }: ConfirmationModalProps

    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log("Pressed")
        navigation.navigate("Type Two Pressurisation")
    }
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
};

export default TypeTwoCompletionModal;
