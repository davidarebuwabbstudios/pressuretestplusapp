import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";

import styles from "./styles";
interface CustomTextInputProps  {
  label: string;
  options: string;
}

const TextButtonGroup: React.FC<CustomTextInputProps> = ({
  label,
  options,
  ...props
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);



  return (
    <>
      <View style={[styles.formgroup, styles.formgroupSpaceBlock]}>
          <View>
            <Text style={styles.body1}>
                {label}
            </Text>
          </View>
          <View style={styles.buttongroup}>
            <ButtonGroup
              buttons={["YES", "NO"]}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
              selectedButtonStyle={{ backgroundColor: "#53a020" }}
              textStyle={{ color: "#53a020" }}
              containerStyle={{ marginBottom: 20, borderColor: "#53a020" }}
            />
          </View>
        </View>
    </>
  );
};

export default TextButtonGroup;
