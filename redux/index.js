import { applyMiddleware, createStore } from "redux";
import MainReducer from "./reducers";

import logger from "redux-logger";
const store = createStore(MainReducer, applyMiddleware(logger));

export default store;
