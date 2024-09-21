import * as React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import InputText from "../../components/input-text/InputText";
import SecureInputText from "../../components/secure-input-text/SecureInputText";
import styles from "./styles";
import { Formik } from "formik";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Yup from "yup";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

type RegisterFormValues = {
  firstName: string;
  surname: string;
  telNumber: string;
  email: string;
  password: string;
};

function RegisterScreen({ navigation }: Props) {
  const initialValues: RegisterFormValues = {
    firstName: "",
    surname: "",
    telNumber: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    surname: Yup.string().required("Surname is required"),
    telNumber: Yup.string().required("Telephone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <AuthWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          //alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <InputText name="firstName" label="First Name" />
            <InputText name="surname" label="Surname" />
            <InputText name="telNumber" label="Telephone Number" />
            <InputText name="email" label="Email Address" />
            <SecureInputText name="password" label="Password"  secureTextEntry/>
            <SecureInputText name="confirmPassword" label="Confirm Password"  secureTextEntry/>
            <View style={styles.view2}>
              <Button
                style={styles.text2}
                textColor="white"
                onPress={handleSubmit}
              >
                {"REGISTER"}
              </Button>
            </View>
          </>
        )}
      </Formik>
      <View style={styles.view3}>
        <Text style={styles.textAlt} onPress={() => navigation.goBack()}>
          Already Registered? Login
        </Text>
      </View>
    </AuthWrapper>
  );
}

export default RegisterScreen;
