import * as React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextInput, Button } from "react-native-paper";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import InputText from "../../components/input-text/InputText";
import SecureInputText from "../../components/secure-input-text/SecureInputText";
import styles from "./styles";
import { Formik } from "formik";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Yup from "yup";
import * as authActions from '../../core/actions/authActions'
import Toast from 'react-native-toast-message';


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
  confirmPassword: string;
};

function RegisterScreen({ navigation }: Props) {
    const dispatch = useDispatch()
    const { isAuthenticated, message, data } = useSelector((state) => state.auth); 
  const initialValues: RegisterFormValues = {
    firstName: "",
    surname: "",
    telNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleRegister = (values: RegisterFormValues) => {
    dispatch(authActions.registerUserRequest(values));
}

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

  const showToast = (type: string, text1: string, text2: string) => {
    Toast.show({
      type,
      text1,
      text2
    });
  }


  useEffect(() => {
    const authenticated = isAuthenticated;
    console.log('authenticated registereduser', authenticated, message, data)
    // setIsLoading(authenticated);
    if(isAuthenticated){
      showToast('success', `Welcome `, message)
      navigation.navigate("Home")
    }
  }, [isAuthenticated]);

  return (
    <AuthWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          handleRegister(values)
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
