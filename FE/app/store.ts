import { ThunkAction, Action } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";
import reduxThunkFsa from "redux-thunk-fsa";
import { createStore, applyMiddleware, combineReducers } from "redux";

import userReducer from "../redux/user/index";
import settingsReducer from "../redux/settings/index";
import layoutsReducer from "../redux/layouts/index";
import profileReducer from "../redux/profile/index";
import imagesReducer from "../redux/images/index";

import logger from "redux-logger";

const reducers = combineReducers({
  profile: profileReducer,
  layouts: layoutsReducer,
  user: userReducer,
  settings: settingsReducer,
  images: imagesReducer
});

const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(reduxThunkFsa, logger, reduxPromise))
  );
};

const store = initStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
