import { combineReducers } from "redux";
import { asnweredListReducer } from "./answeredList/answered-list.reducer";
import { counterReducer } from "./counter/counter.reducer";
import { scoreReducer } from "./score/score.reducer";

export const reducers = combineReducers({
  answeredList: asnweredListReducer,
  questionCounter: counterReducer,
  score: scoreReducer,
});
