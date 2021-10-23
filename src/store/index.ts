import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./reducers/formReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;