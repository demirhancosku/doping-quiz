import {SET_CURRENT_QUESTION_ID} from "@state/questions/actions";

export interface SetQuestionIdAction {
    type: typeof SET_CURRENT_QUESTION_ID;
    payload: number;
}


// Define action types
export type QuestionActionTypes = SetQuestionIdAction;

// Define the state types
export interface QuestionState {
    current: number | null;
}