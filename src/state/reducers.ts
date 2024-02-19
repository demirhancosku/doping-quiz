import {combineReducers} from "@reduxjs/toolkit";
import {questionReducer} from "./questions/reducer";
import {answersReducer} from "./answers/reducer";

// Combine state and reducers
export const rootReducer = combineReducers({
    question: questionReducer,
    answers: answersReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
