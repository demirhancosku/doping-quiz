// Simulate fetching quiz data by ID from a local JSON file
import {QuizType} from "@sharedTypes/QuizType";
import {QuestionType} from "@sharedTypes/QuestionType";

export const fetchQuizById = async (quizId: number): Promise<QuizType> => {
    const response = await fetch('/quizzes.json');
    if (!response.ok) {
        throw new Error('fetchQuizById Network Error');
    }
    const quizzes = await  response.json()
    quizId = quizId || 1
    // quiz not found case ignored since its just a simulation
    return ((quizzes as QuizType[]).find((quiz: QuizType) => quiz.id === quizId) as QuizType);
};

// Simulate fetching questions for a quiz by quiz ID
export const fetchQuestionsByQuizId = async (quizId: number): Promise<QuestionType[]> => {
    const response = await fetch('/questions.json');
    if (!response.ok) {
        throw new Error('fetchQuestionsByQuizId Network Error');
    }
    const questions = await  response.json()
    return (questions as QuestionType[]).filter((question: QuestionType) => question.quizId === quizId);
};
