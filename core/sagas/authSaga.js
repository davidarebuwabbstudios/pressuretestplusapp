import { call, put, takeEvery } from "redux-saga/effects";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchApi, getApiUrl } from "./../api";
import {
  authUserSuccess,
  authUserFailure,
  registerUserSuccess,
  registerUserFailure,
  getAuthResponse,
} from "../actions/authActions";

const { AUTH_USER_REQUEST, REGISTER_USER_REQUEST } =
  require("../actions/authActions").constants;

const apiUrl = getApiUrl();

function* authUser(action) {
  try {
    const { email, password } = action.payload; //onLoginSuccess, onLoginFailure
    // Make the request to login only if the user is not currently logged in
    //const isLoggedIn = yield select(_isLoggedIn);
    //if(!isLoggedIn){
    const response = yield call(fetchApi, {
      method: "POST",
      body: {
        email,
        password,
      },
      url: `${apiUrl}/login`,
    });
    console.log("response", response.data);
    yield put(authUserSuccess(response.data));
    //AsyncStorage.setItem("@token", JSON.stringify(response.data.token));
    console.log("auth login success");
    //onLoginSuccess callback
  } catch (e) {
    console.log("auth login failure", e.message, e);
    yield put(authUserFailure(e.message));
  }
}

function* registerUser(action) {
  try {
    const { firstName, surname, email, password, confirmPassword } = action.payload; //onLoginSuccess, onLoginFailure
    // Make the request to login only if the user is not currently logged in
    //const isLoggedIn = yield select(_isLoggedIn);
    //if(!isLoggedIn){
    const response = yield call(fetchApi, {
      method: "POST",
      body: {
        name: `${firstName} ${surname}`,
        email,
        password,
        c_password: confirmPassword,
      },
      url: `${apiUrl}/register`,
    });
    console.log("response", response.data);
    yield put(registerUserSuccess(response.data));
    //AsyncStorage.setItem("@token", JSON.stringify(response.data.token));
    console.log("auth register success");
  } catch (e) {
    console.log("auth reg failure", e.message);
    yield put(registerUserFailure(e.message));
  }
}

function* checkRegisteredUserExists(action) {
  try {
    const { email } = action.payload;
    const response = yield call(api.checkUserExists, email);

    if (response.status === 200) {
      // User exists
      yield put(setAuthentication({ isAuthenticated: false, token: null }));
    } else {
      // User doesn't exist
      // Proceed with registration or other actions
    }
  } catch (error) {
    // Handle errors
    console.log("Error checking user existence:", error);
  }
}

function* checkAuthUserToken() {
  try {
    const token = yield AsyncStorage.getItem("token");
    if (token) {
      // Assuming we have an API endpoint to verify the token
      const response = yield call(api.verifyToken, token);
      if (response.status === 200) {
        yield put(setAuthentication({ isAuthenticated: true, token }));
      } else {
        // Handle token verification failure
        yield put(setAuthentication({ isAuthenticated: false, token: null }));
      }
    } else {
      yield put(setAuthentication({ isAuthenticated: false, token: null }));
    }
  } catch (error) {
    console.log("Error checking authentication:", error);
    yield put(setAuthentication({ isAuthenticated: false, token: null }));
  }
}

export default function* authSaga() {
  yield* [
    takeEvery(AUTH_USER_REQUEST, authUser),
    takeEvery(REGISTER_USER_REQUEST, registerUser),
  ];
}
