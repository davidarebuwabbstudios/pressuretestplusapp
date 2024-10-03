import { Record } from 'immutable';

const {
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
    GET_AUTH_RESPONSE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} = require('../actions/authActions').constants;

const InitialState = Record({
    isFetching: null,
    isAuthenticated: false,
    userToken: null,
    message: {},
    error: null,
    data: {},
});


const initialState = new InitialState();

export default function authReducer(state = initialState, {type, payload}) {
    if(!(state instanceof InitialState)) return initialState.mergeDeep(state);
    switch (type) {
        case AUTH_USER_REQUEST: { 
            console.log('AUTH_USER_REQUEST');
            return state.set('isFetching', true)
            .set('error', null);
        }

        case AUTH_USER_SUCCESS: {
            console.log('AUTH_USER_SUCCESS');
            return state.set('isFetching', false)
            .set('isAuthenticated',payload.success)
            .set('userToken', payload.data.token)
            .set('message',payload.message)
            .set('data',payload)
            .set('error', null);
        }

        case GET_AUTH_RESPONSE: {
            console.log('GET_AUTH_RESPONSE')
            return state.set('isFetching', false)
            .set('isAuthenticated',payload.success)
            .set('message',payload.message)
            .set('data',payload.data);
        }

        case AUTH_USER_FAILURE: {
            return state.set('isFetching', false)
            .set('isAuthenticated', false)
            .set('message',payload)
            .set('error', payload);
        }

        case REGISTER_USER_REQUEST: { 
            console.log('REGISTER_USER_REQUEST');
            return state.set('isFetching', true)
            .set('error', null);
        }

        case REGISTER_USER_SUCCESS: {
            console.log('REGISTER_USER_SUCCEESS');
            return state.set('isFetching', false)
            .set('isAuthenticated',true)
            .set('userToken', payload.data.token)
            .set('message',payload.message)
            .set('data',payload)
            .set('error', null);
        }

        case REGISTER_USER_FAILURE: {
            return state.set('isFetching', false)
            .set('isAuthenticated', false)
            .set('message',payload)
            .set('error', payload);
        }

        default:
            return state;
    }
}