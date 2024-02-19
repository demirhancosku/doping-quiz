import React from 'react';
import styles from '@styles/components/Lesson/LessonCard.module.scss';
import {LessonCardProps} from "@components/Lesson/types";
import {Questions} from "@components/Lesson/Questions";
import Ders from "@assets/Ders.png";
import {Col, Row} from "react-flexbox-grid";

export const LessonCard: React.FC<LessonCardProps> = ({questions, answers}) => {
    const findAnswer = (questionId: number) => {
        return Object.keys(answers || {}).indexOf(String(questionId)) > -1 ? answers[questionId].answer : false;
    }

    return (
        <div className={styles.lessonCard}>
            <Col xs={12}>
                <Row>
                    <Col>
                        <img src={Ders} alt={"Ders Icon"}/>
                    </Col>
                    <Col className={'flex-grow'}>
                        <div className={styles.headerTitle}>
                            <div><b>Türkçe</b></div>
                            <div>{questions.length} Soru</div>
                        </div>
                    </Col>
                </Row>
            </Col>
            {questions.map(question => {
                const answer = findAnswer(question.id)
                return (
                    <Questions key={question.id} question={question} answer={answer}/>
                )
            })}
        </div>
    );
};
