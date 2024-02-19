import {SET_CURRENT_QUESTION_ID} from "@state/questions/actions";
import {QuestionActionTypes, QuestionState} from "@state/questions/types";

// Initial state
const initialQuestionState: QuestionState = {
    current: null,
};

// Reducers
export const questionReducer = (
    state = initialQuestionState,
    action: QuestionActionTypes
): QuestionState => {
    switch (action.type) {
        case SET_CURRENT_QUESTION_ID:
            return {
                ...state,
                current: action.payload || null,
            };
        default:
            return state;
    }
};