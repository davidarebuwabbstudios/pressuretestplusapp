import * as React from "react";
import { View, Text } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";
import { useField, ErrorMessage } from "formik";


interface CustomTextInputProps extends TextInputProps {
  label: string;
  name: string;
}

const ToolTipTextField: React.FC<CustomTextInputProps> = ({
  label,
  name,
  ...props
}) => {
  const [value, meta, helpers] = useField(name);

  const handleChange = (new_text: string) => {
    helpers.setValue(new_text);
  };


  return (
    <>
      <View
        style={{
          borderColor: "#0000003B",
          borderRadius: 4,
          borderWidth: 1,
          paddingVertical: 0,
          paddingHorizontal: 12,
          marginBottom: 16,
          justifyContent: "center",
        }}
      >
         <ErrorMessage
          component={Text}
          style={{
            marginTop: 8,
            fontSize: 10,
            color: "red",
          }}
          name={name}
        />
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
              primary: "#6F8E42",
            },
          }}
          onChangeText={handleChange}
          value={meta.value}
          right={<TextInput.Icon icon="information" />}
        />
       
      </View>
    </>
  );
};

export default ToolTipTextField;
