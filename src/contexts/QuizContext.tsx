import React, {createContext, useContext, useCallback, useMemo} from 'react';
import {QuestionType} from "@sharedTypes/QuestionType";
import {AddAnswerAction, AnswersResultState} from "@state/answers/types";
import Loading from "@components/Loading";

interface QuizProviderProps {
    children: React.ReactNode;
    questions: QuestionType[];
    currentQuestionId: number;
    answers: AnswersResultState
    addAnswer: (quizId: number, questionId: number, answer: string, result: boolean) => AddAnswerAction;
    setCurrentQuestionId: (id: number) => void
}

interface QuizContextType {
    questions: QuestionType[];
    currentQuestionId: number;
    answers: AnswersResultState;
    saveAnswer: (answer: string) => void;
    currentQuestion: QuestionType | null
    setCurrentQuestion: (id: number) => void;
    navigate: (isPrev: boolean) => void;
    currentAnswer: boolean | string
    setShowAnswers: (enabled: boolean) => void;
    showAnswers: boolean;
    currentIndex: number;
}

export const QuizContext = createContext<QuizContextType>({
    questions: [],
    currentQuestionId: 0,
    answers: {},
    currentAnswer: false,
    currentQuestion: null,
    setCurrentQuestion: (id) => {
    },
    saveAnswer: (answer) => {
    },
    navigate: (isPrev) => {
    },
    setShowAnswers: (enabled) => {
    },
    showAnswers: false,
    currentIndex: 0,
});

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC<QuizProviderProps> =
    ({
         children,
         questions,
         currentQuestionId,
         answers,
         setCurrentQuestionId,
         addAnswer
     }) => {

        const [showAnswers, setShowAnswers] = React.useState(false);

        const currentIndex = useMemo(
            () => questions.findIndex(q => q.id === currentQuestionId),
            [questions, currentQuestionId]);

        const currentQuestion = useMemo(() => {
            return questions.find(q => q.id === currentQuestionId) as QuestionType;
        }, [questions, currentQuestionId]);

        const currentAnswer = useMemo(() => {
            return Object.keys(answers || {}).indexOf(String(currentQuestionId)) > -1 ? answers[currentQuestionId].answer : false;
        }, [answers, currentQuestionId]);


        // Callbacks
        const saveAnswer = useCallback((answer: string) => {
            if (answers === undefined || !answers.hasOwnProperty(currentQuestion.id)) {
                addAnswer(currentQuestion.quizId, currentQuestion.id, answer, answer === currentQuestion.correctAnswer)
            }
        }, [addAnswer, currentQuestion, answers]);

        const setCurrentQuestion = useCallback((id: number) => {
            // TODO:
            setCurrentQuestionId(id);
        }, [setCurrentQuestionId]);

        const navigate = useCallback((isPrev: boolean) => {
            const newIndex = isPrev ? currentIndex - 1 : currentIndex + 1;
            if (questions[newIndex]?.id)
                setCurrentQuestionId(questions[newIndex].id)
        }, [setCurrentQuestionId, currentIndex, questions]);


        if (currentQuestion === null) {
            // TODO: fetch error
            return <Loading/>
        }


        return (
            <QuizContext.Provider value={{
                questions,
                currentQuestionId,
                answers,
                currentAnswer,
                currentQuestion,
                setCurrentQuestion,
                navigate,
                saveAnswer,
                setShowAnswers,
                showAnswers,
                currentIndex
            }}>
                {children}
            </QuizContext.Provider>
        );
    };