'use client'
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools} from  "@redux-devtools/extension";
import thunk from "redux-thunk";
//import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

//TODO: switch to configure store
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: applyMiddleware(sagaMiddleware, logger)
//   });

//TO:DO add persistense 
// const persistenceConfigs = {
//     key: "loggedIn",
//     storage
//   }

// const persistedReducer = persistReducer(persistenceConfigs, rootReducer)

const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

// const persistor = persistStore(store)
// export { persistor, store }


export default configureStore;
