import React from 'react';
import styles from "@styles/components/Quiz/Question.module.scss";
import {QuestionType} from "@sharedTypes/QuestionType";
import AnswerButton from "@components/Quiz/Question/AnswerButton";
import WatchVideoButton from "@components/Quiz/Question/WatchVideoButton";

type OptionItemProps = {
    showAnswers: boolean;
    selectedOption: string | null;
    saveAnswer: (option: string) => void;
    option: string;
    i: number;
    currentQuestion: QuestionType;
    selectOption: (option: string) => void;
    answer: boolean | string;
};

const OptionItem: React.FC<OptionItemProps> =
    ({
         option,
         i,
         selectedOption,
         showAnswers,
         currentQuestion,
         selectOption,
         saveAnswer,
         answer
     }) => {
        // TODO: redactor this
        const QuestionOptionPrefixes = "ABCDEFG"
        const boldItalicRegex = /\*(.*?)\*/g;
        const renderText = () => {
            return option.split(boldItalicRegex).map((part, index) => {
                // Apply underlined bold within asterisks
                if (index % 2 !== 0) {
                    return (
                        <strong className={"underlined-text"} key={index}>
                            {part}
                        </strong>
                    );
                }
                // Return normal text for other parts
                return part;
            });
        };

        let optionClassName = styles.optionItem;
        if (showAnswers && answer !== false) {
            optionClassName += option === currentQuestion.correctAnswer ? ` ${styles.correct}` : answer === option ? ` ${styles.incorrect}` : ``;
        } else if (String(answer) === option) {
            optionClassName += ` ${styles.selected}`
        } else if (selectedOption === option && answer === false) {
            optionClassName += ` ${styles.selected}`;
        }

        return (
            <li
                key={option}
                className={optionClassName}
                onClick={() => selectOption(option)}
            >
                <span>{QuestionOptionPrefixes[i]?.toUpperCase()} ) {renderText()}</span>
                {selectedOption === option && answer === false && <AnswerButton onClick={() => {
                    saveAnswer(option)
                }}/>}

                {showAnswers && answer !== false && option === currentQuestion.correctAnswer && <WatchVideoButton/>}
            </li>
        );
    };

export default OptionItem;
