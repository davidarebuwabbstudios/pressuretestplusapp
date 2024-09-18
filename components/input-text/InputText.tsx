import * as React from "react";
import { View } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

interface CustomTextInputProps extends TextInputProps {
  label: string;
}

const InputText: React.FC<CustomTextInputProps> = ({ label, ...props }) => {
  return (
    <>
     <View style={{
        	borderColor: "#0000003B",
            borderRadius: 4,
            borderWidth: 1,
            paddingVertical: 0,
            paddingHorizontal: 12,
            marginBottom: 16,
            justifyContent: 'center'
     }}>

    <TextInput
      label={label}
      underlineStyle={{ height: 0 }}
      style={{
        color: "black",
        fontSize: 15,
        backgroundColor: "white",
      }}
    />
    </View>
    </>
  );
};

export default InputText;
