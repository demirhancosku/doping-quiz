import React from "react";
import {AddAnswerAction, ResetAnswersAction} from "@state/answers/types";
import {SetQuestionIdAction} from "@state/questions/types";
import {AnswerType} from "@sharedTypes/AnswerType";

interface HomePageProps {
    children?: React.ReactNode;
}

export interface StateProps {
    currentQuestionId: number | null;
    answers: {
        [questionId: number]: AnswerType
    };
}

export interface DispatchProps {
    setCurrentQuestionId: (id: number) => SetQuestionIdAction,
    addAnswer: (quizId: number, questionId: number, answer: string, result: boolean) => AddAnswerAction,
    resetAnswers: (quizId: number) => ResetAnswersAction,
}

export type UnifiedHomeProps = StateProps & DispatchProps & HomePageProps;
