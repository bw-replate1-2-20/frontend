import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { requestReducer } from "./requestReducer";

export default combineReducers({ authReducer, requestReducer });
