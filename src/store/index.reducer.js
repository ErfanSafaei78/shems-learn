import { combineReducers } from "redux";
import { asnweredListReducer } from "./answeredList/answeredList.reducer";
import { questionCounterReducer } from "./questionCounter/questionCounter.reducer";
import { scoreReducer } from "./score/score.reducer";

export const reducers = combineReducers({
    answeredList: asnweredListReducer,
    questionCounter: questionCounterReducer,
    score: scoreReducer,
})