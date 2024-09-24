import {createActions } from "redux-actions";
import keyMirror from "key-mirror";

export const constants = keyMirror({
    AUTH_USER_REQUEST: null,
    AUTH_USER_SUCCESS: null,
    AUTH_USER_FAILURE: null,

    REGISTER_USER_REQUEST: null,
    REGISTER_USER_SUCCESS: null,
    REGISTER_USER_FAILURE: null,

    SET_AUTH_TOKEN: null,
    GET_AUTH_RESPONSE: null,

})

export const {
    authUserRequest,
    authUserSuccess,
    authUserFailure,
} = createActions(
    constants.AUTH_USER_REQUEST,
    constants.AUTH_USER_SUCCESS,
    constants.AUTH_USER_FAILURE,
)

export const {
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
} = createActions(
    constants.REGISTER_USER_REQUEST,
    constants.REGISTER_USER_SUCCESS,
    constants.REGISTER_USER_FAILURE,
)

export const {
    setAuthToken,
    getAuthResponse
} = createActions(
    constants.SET_AUTH_TOKEN,
    constants.GET_AUTH_RESPONSE,
)