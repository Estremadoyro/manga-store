import { combineReducers } from "redux";
import { newsBarReducer } from "./newsBarReducer";

export const reducers = combineReducers({
  newsBar: newsBarReducer,
});

export type RootState = ReturnType<typeof reducers>;
