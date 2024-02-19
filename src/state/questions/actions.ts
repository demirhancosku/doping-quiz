import {SetQuestionIdAction} from "@state/questions/types";

export const SET_CURRENT_QUESTION_ID = "SET_CURRENT_QUESTION_ID";

// Action creators
export const setCurrentQuestionId = (id: number): SetQuestionIdAction => {
    return {
        type: SET_CURRENT_QUESTION_ID,
        payload: id,
    };
};
