import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools} from  "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

//TODO: switch to configure store
const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
