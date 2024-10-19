import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";
import InputText from "../input-text/InputText";
import { Dropdown, DropdownInputProps } from "react-native-paper-dropdown";
import { useField, ErrorMessage } from "formik";


   export interface Options {
    label: string;
    value: string;
    image: string;
   }

interface DropDownFieldProps {
  options: Options[];
  placeholder: string;
}

const OPTIONS = [
  { label: "Ductile Iron", value: "ductile-iron" },
  { label: "GRP", value: "grp" }
];

const CustomDropdownInput = ({
  placeholder,
  selectedLabel,
  rightIcon
}: DropdownInputProps) => (
  <TextInput
    placeholder={placeholder}
    value={selectedLabel}
   underlineStyle={{ height: 0 }}
    selectionColor="#6F8E42"
   activeOutlineColor="#6F8E42"
    style={{
      color: "black",
      fontSize: 15,
      backgroundColor: "white"
    }}
    theme={{
      colors: {
        primary: "#6F8E42"
      }
    }}
    right={ <TextInput.Icon icon="chevron-down" /> }
  />
);

const DropDownField: React.FC<DropDownFieldProps> = ({
    options,
    placeholder
}) => {
  //   const [value, meta, helpers] = useField(name);
  const [dropDownValue, setDropDownValue] = useState<string>();

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
          justifyContent: "center"
        }}
      >
        {/* <ErrorMessage
          component={Text}
          style={{
            marginTop: 8,
            fontSize: 10,
            color: "red",
          }}
         // name={name}
        /> */}
        <Dropdown
          placeholder={placeholder}
          options={options}
          value={dropDownValue}
          onSelect={setDropDownValue}
          hideMenuHeader
          menuContentStyle={{
            backgroundColor: "#fff"
          }}
          CustomDropdownInput={CustomDropdownInput}
        />
      </View>
    </>
  );
};

export default DropDownField;
