import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import AuthWrapper from "../../components/auth-wrapper/AuthWrapper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import InputText from "../../components/input-text/InputText";
import SecureInputText from "../../components/secure-input-text/SecureInputText";
import { TextInput, Button } from "react-native-paper";
import { Formik, Form } from "formik";
import styles from "./styles";
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import * as authActions from '../../core/actions/authActions'


type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

type LoginFormValues = {
  email: string;
  password: string;
};


function LoginScreen({ navigation }: Props) {
  const dispatch = useDispatch()
  const { isAuthenticated, message, data } = useSelector((state) => state.auth); //:IRootState
  const {name} = data;
  const [isLoading, setIsLoading] = useState(false);
  const [authFeedback, setAuthFeedback] = useState('');


   const handleLogin = (values: LoginFormValues) => {
    dispatch(authActions.authUserRequest(values));
}

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

const showToast = (type: string, text1: string, text2: string) => {
  Toast.show({
    type,
    text1,
    text2
  });
}

useEffect(() => {
  const authenticated = isAuthenticated;
  console.log('authenticated user', authenticated, message, data)
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
          //alert(JSON.stringify(values, null, 2));
          handleLogin(values)
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
