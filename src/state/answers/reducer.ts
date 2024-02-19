import {ADD_ANSWER, RESET_ANSWERS} from "@state/answers/actions";
import {AnswerActionTypes, AnswersState} from "@state/answers/types";

// Initial Answers State
const initialAnswersState: AnswersState = {};

export const answersReducer = (
    state = initialAnswersState,
    action: AnswerActionTypes
): AnswersState => {
    switch (action.type) {
        case ADD_ANSWER:
            const {quizId, questionId, answer, result} = action.payload;
            return {
                ...state,
                [quizId]: {
                    ...state[quizId],
                    [questionId]: {
                        quizId,
                        questionId,
                        answer,
                        result,
                    },
                },
            };
        case RESET_ANSWERS:
            const newState = {...state};
            delete newState[action.payload]; // Remove the answers for the given quiz ID
            return newState;
        default:
            return state;
    }
};
