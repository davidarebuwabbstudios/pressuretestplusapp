import { Record } from 'immutable';

const {
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
} = require('../actions/authActions').constants;

const InitialState = Record({
    isFetching: null,
    authenticated: {},
    error: null,
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
            .set('authenticated',payload)
            .set('error', null);
        }

        case AUTH_USER_FAILURE: {
            return state.set('isFetching', false)
            .set('error', payload);
        }

        default:
            return state;
    }
}