import {AddAnswerAction, ResetAnswersAction} from "@state/answers/types";

export const ADD_ANSWER = "ADD_ANSWER";
export const RESET_ANSWERS = "RESET_ANSWERS";

export const addAnswer = (quizId: number, questionId: number, answer: string, result: boolean): AddAnswerAction => {
    return {
        type: ADD_ANSWER,
        payload: {
            quizId,
            questionId,
            answer,
            result,
        },
    };
};

export const resetAnswers = (quizId: number): ResetAnswersAction => {
    return {
        type: RESET_ANSWERS,
        payload: quizId,
    };
};
