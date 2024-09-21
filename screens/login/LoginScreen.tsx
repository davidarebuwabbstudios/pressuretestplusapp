import * as React from "react";
import { View } from "react-native";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../components/input-text/InputText";
import SecureInputText from "../../components/secure-input-text/SecureInputText";
import { TextInput, Button } from "react-native-paper";
import { Formik, Form } from "formik";
import styles from "./styles";
import * as Yup from 'yup';


type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginScreen({ navigation }: Props) {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({  
    email: Yup.string()
    .email('Invalid email address')                    
        .required('Email Address Required'),                 
    password: Yup.string()  
        .min(6, 'Password must be at least 6 characters')                
        .required('Password Required!'),              
})

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
            <InputText name="email" label="Email address" />
            <SecureInputText name="password" label="Password"  secureTextEntry/>
            <View style={styles.view2}>
              <Button style={styles.text2} onPress={handleSubmit} textColor="white">
                {"LOGIN"}
              </Button>
            </View>
          </>
        )}
      </Formik>
      <View style={styles.view3}>
        <Button
          style={styles.text2}
          textColor="white"
          onPress={() => navigation.push("Register")}
        >
          {"REGISTER"}
        </Button>
      </View>
    </AuthWrapper>
  );
}

export default LoginScreen;
