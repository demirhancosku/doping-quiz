import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {DispatchProps, StateProps, UnifiedHomeProps} from "./types";
import {Text} from "@components/Layout/";
import {RootReducer} from "@state/reducers";
import {setCurrentQuestionId} from "@state/questions/actions";
import {connect} from "react-redux";
import {QuizProvider} from "@contexts/QuizContext";
import {useQuery} from "react-query";
import {fetchQuestionsByQuizId, fetchQuizById} from "@query/index";
import Loading from "@components/Loading";
import QuizComponent from "@components/Quiz";
import {LeftNav} from "@components/LeftNav";
import {BackButton} from "@components/Buttons";

import {addAnswer, resetAnswers} from "@state/answers/actions";
import LessonComponent from "@components/Lesson";

const activeQuizId = 1

const HomePage: React.FC<UnifiedHomeProps> =
    ({
         currentQuestionId,
         answers,
         setCurrentQuestionId,
         addAnswer,
         resetAnswers,
     }) => {

        // fetch quiz
        const {
            data: quizData,
            isLoading: isLoadingQuiz
        } = useQuery(
            ['quiz', activeQuizId],
            () => fetchQuizById(activeQuizId),
            {
                staleTime: 10 * (60 * 1000),
                cacheTime: 15 * (60 * 1000),
            });

        const {
            data: questions,
            isLoading: isLoadingQuestions
        } = useQuery(
            ['questions', activeQuizId],
            () => fetchQuestionsByQuizId(quizData?.id as number),
            {
                enabled: !isLoadingQuiz && !!quizData,
                staleTime: 10 * (60 * 1000),
                cacheTime: 15 * (60 * 1000),
            });

        React.useEffect(() => {
            if (questions) {
                const existenceCheck = questions?.find(q => q.id === currentQuestionId)

                if (existenceCheck === undefined) {
                    setCurrentQuestionId(questions[0].id)
                }
            }

        }, [currentQuestionId, questions, setCurrentQuestionId])


        if (isLoadingQuestions || isLoadingQuiz || currentQuestionId === null) {
            return <Loading/>
        }

        if (questions === undefined) {
            // TODO: fetch error
            return <Loading/>
        }

        const onBackClick = () => {

        }

        return (
            <QuizProvider
                questions={questions}
                currentQuestionId={currentQuestionId}
                answers={answers}
                resetAnswers={resetAnswers}
                addAnswer={addAnswer}
                setCurrentQuestionId={setCurrentQuestionId}
            >
                <React.Fragment>
                    <LeftNav/>
                    <Grid fluid>
                        <Row>
                            <Col xs={9}>
                                <main className="main-section">
                                    <Row>
                                        <Col xs={12}>
                                            <BackButton onClick={onBackClick}/>
                                        </Col>
                                        <Col xs={12}>
                                            <Text size={"large"}>{quizData?.title}</Text>
                                        </Col>
                                    </Row>
                                    <Row className="flex-grow">
                                        <QuizComponent/>
                                    </Row>
                                </main>
                            </Col>
                            <Col xs={3} className="right-sidebar">
                                <LessonComponent/>
                            </Col>
                        </Row>
                    </Grid>
                </React.Fragment>
            </QuizProvider>
        );
    };

// Connection between redux & homa
const mapStateToProps = (state: RootReducer): StateProps => ({
    currentQuestionId: state.question.current,
    answers: state.question.current === null ? {} : state.answers[activeQuizId],
});

const mapDispatchToProps: DispatchProps = {
    setCurrentQuestionId,
    addAnswer,
    resetAnswers,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
