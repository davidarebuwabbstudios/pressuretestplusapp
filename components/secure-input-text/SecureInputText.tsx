import * as React from "react";
import { View } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";
import { useField } from "formik";

interface CustomSecureTextInputProps extends TextInputProps {
  label: string;
  name: string;
  secureTextEntry: boolean;
}

const SecureInputText: React.FC<CustomSecureTextInputProps> = ({
  label,
  name,
  secureTextEntry,
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
          secureTextEntry={secureTextEntry}
          right={ secureTextEntry ? <TextInput.Icon icon="eye" /> : null}
        />
      </View>
    </>
  );
};

export default SecureInputText;
