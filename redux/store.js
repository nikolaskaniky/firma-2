import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { selectedPageReducer } from "./reducers/actions-page-reducers";
import { selectedCVSkillReducer } from "./reducers/cv-skill-reducers";
import { selectedPricingUserReducer } from "./reducers/pricing-reducers";
import { selectedCalculatorReducer } from "./reducers/selected-calculator-reducers";
import { testReducer } from "./reducers/test-reducers";
import {
  updateUserProfileReducer,
  userDetailsReducer,
  userLoginReducer,
} from "./reducers/users-reducers";

let store;

const reducers = combineReducers({
  selectedPricingUser: selectedPricingUserReducer,
  selectedCVSkill: selectedCVSkillReducer,
  selectedCalculator: selectedCalculatorReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: updateUserProfileReducer,
  test: testReducer,
  selectedPage: selectedPageReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["selectedCalculator", "selectedCVSkill", "selectedPage"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

function makeStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
