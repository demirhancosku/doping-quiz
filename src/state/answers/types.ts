import {ADD_ANSWER, RESET_ANSWERS} from "@state/answers/actions";
import {AnswerType} from "@sharedTypes/AnswerType";

export interface AddAnswerAction {
    type: typeof ADD_ANSWER;
    payload: AnswerType;
}

export interface ResetAnswersAction {
    type: typeof RESET_ANSWERS;
    payload: number; // Quiz ID
}


// Define action types
export type AnswerActionTypes = AddAnswerAction | ResetAnswersAction;

export interface AnswersState {
    [quizId: number]: { [questionId: number]: AnswerType };
}

export interface AnswersResultState {
    [questionId: number]: AnswerType
}