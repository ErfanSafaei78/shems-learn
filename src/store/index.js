import { createStore } from "redux";
import { reducers as combineReducer } from "./index.reducer";

export const store = createStore(combineReducer);
