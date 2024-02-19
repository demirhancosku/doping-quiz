import React from 'react';

import {useQuiz} from "@contexts/QuizContext";
import Footer from "@components/Quiz/Footer";
import Question from "@components/Quiz/Question";
import {QuestionType} from "@sharedTypes/QuestionType";
import {Col, Row} from "react-flexbox-grid";

interface QuizComponentProps {
}

const QuizComponent: React.FC<QuizComponentProps> = () => {
    const {currentQuestion, saveAnswer, currentAnswer, showAnswers} = useQuiz();

    return (
        <div className={"display-flex"}>
            <Row className={"flex-grow"}>
                <div className={"card"}>
                    <Question
                        currentQuestion={currentQuestion as QuestionType}
                        showAnswers={showAnswers}
                        currentAnswer={currentAnswer}
                        saveAnswer={saveAnswer}/>
                </div>
            </Row>
            <Row>
                <Col xs={12}>
                    <Footer/>
                </Col>
            </Row>
        </div>
    );
};

export default QuizComponent;
