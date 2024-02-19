import React, {memo} from 'react';
import styles from '@styles/components/Lesson/QuestionLine.module.scss';
import {QuestionLineProps} from "@components/Lesson/types";
import {OptionLines} from "@components/Lesson/Questions/OptionLines";
import {useQuiz} from "@contexts/QuizContext";

const _Questions: React.FC<QuestionLineProps> = ({question, answer}) => {
    const {setCurrentQuestion, currentQuestionId} = useQuiz();

    return (
        <div className={`${styles.questionLine} ${currentQuestionId === question.id && styles.activeQuestionLine} `}
             onClick={() => {
                 setCurrentQuestion(question.id)
             }}>
            <span className={styles.questionLine__span}>{question.id}. Soru</span>
            {OptionLines({question, answer})}
        </div>
    );
};

export const Questions = memo(_Questions)