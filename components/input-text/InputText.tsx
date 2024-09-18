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
      selectionColor="#6F8E42"
      activeOutlineColor="#6F8E42"
      style={{
        color: "black",
        fontSize: 15,
        backgroundColor: "white",
      }}
      theme={{
        colors: {
          primary: '#6F8E42'
        },
      }}
    />
    </View>
    </>
  );
};

export default InputText;
