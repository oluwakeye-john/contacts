import { applyMiddleware, createStore } from "redux";
import MainReducer from "./reducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-community/async-storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, MainReducer);

// export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);
export const persistor = persistStore(store);
