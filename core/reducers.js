import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import isLoadingReducer from "./reducers/isLoadingReducer";
import errorReducer from "./reducers/errorReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    isLoadingReducer: isLoadingReducer,
    errorReducer: errorReducer,
});



//export type IRootState = ReturnType<typeof rootReducer>
export default rootReducer;