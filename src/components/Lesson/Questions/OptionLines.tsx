import React from 'react';
import styles from '@styles/components/Lesson/QuestionLine.module.scss';
import {QuestionLineProps} from "@components/Lesson/types";

const QuestionOptionPrefixes = "ABCDEFG"
export const OptionLines = ({question, answer}: QuestionLineProps) => {

    const lines = question.options.map((option, i) => (
        <div
            key={option}
            className={`${styles.questionLine__option} ${answer === option ? styles['questionLine__option--selected'] : ''}`}
        >
            {QuestionOptionPrefixes[i].toUpperCase()}
        </div>
    ));

    return (lines);
};

