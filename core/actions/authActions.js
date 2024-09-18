import {createActions } from "redux-actions";
import keyMirror from "key-mirror";

export const constants = keyMirror({
    AUTH_USER_REQUEST: null,
    AUTH_USER_SUCCESS: null,
    AUTH_USER_FAILURE: null,
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