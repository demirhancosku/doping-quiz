import {QuestionType} from "@sharedTypes/QuestionType";
import {AnswersResultState} from "@state/answers/types";

export interface LessonCardProps {
    questions: QuestionType[];
    answers: AnswersResultState;
}

export interface QuestionLineProps {
    question: QuestionType;
    answer: string | boolean;
}