import React, {useState} from 'react';
import styles from '@styles/components/Quiz/Question.module.scss';
import {QuestionType} from "@sharedTypes/QuestionType";
import {Tag} from "@components/Layout";
import {Grid, Row, Col} from 'react-flexbox-grid';
import {QuestionActionButtons} from "@components/Buttons/QuestionActionButtons";
import OptionItem from "@components/Quiz/Question/OptionItem";

interface QuestionProps {
    currentQuestion: QuestionType;
    showAnswers: boolean;
    saveAnswer: (option: string) => void;
    currentAnswer: boolean | string;
}

const Index: React.FC<QuestionProps> =
    ({
         currentQuestion,
         showAnswers,
         saveAnswer,
         currentAnswer,
     }) => {
        const [selectedOption, setSelectedOption] = useState("")

        return (
            <Grid fluid className="display-flex">
                <Row middle="xs" className={styles.headerContainer}>
                    <Col xs={6}>
                        <Tag> Soru: Türkçe #{currentQuestion.id} </Tag>
                    </Col>
                    <Col xs={6}>
                        <QuestionActionButtons/>
                    </Col>
                </Row>
                <Row between="xs" className="flex-grow">
                    <Col xs={12}>
                        <span className={styles.description}>{currentQuestion.description}</span>
                        <h2 className={styles.questionText}>{currentQuestion.questionText}</h2>
                    </Col>
                    <Col xs={12}>
                        <ul className={styles.optionsList}>
                            {currentQuestion.options.map((option, i) =>
                                (<OptionItem
                                        key={i}
                                        i={i}
                                        showAnswers={showAnswers}
                                        selectedOption={selectedOption}
                                        option={option}
                                        currentQuestion={currentQuestion}
                                        saveAnswer={saveAnswer}
                                        answer={currentAnswer}
                                        selectOption={setSelectedOption}/>
                                ))}
                        </ul>
                    </Col>
                </Row>
            </Grid>
        );
    };

export default Index;
