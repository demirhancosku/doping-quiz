import React, {useState} from 'react';

import {useQuiz} from "@contexts/QuizContext";
import {Col, Row} from "react-flexbox-grid";
import {LessonCard} from "@components/Lesson/LessonCard";
import {EndButton} from "@components/Buttons/EndButton";
import {ShowAnswerToggle} from "@components/Toggles/ShowAnswerToggle";
import Modal from "@components/Modal";

interface LessonComponentProps {
}


const LessonComponent: React.FC<LessonComponentProps> = () => {
    const {questions, answers, setShowAnswers, showAnswers, resetAnswers} = useQuiz();
    const [isModalVisible, setModalVisibility] = useState(false);

    const handleOpenModal = () => {
        setModalVisibility(true);
    };

    const handleCloseModal = () => {
        setModalVisibility(false);
    };

    return (
        <div className={"padding-header-top"}>
            <Row middle="xs">
                <Col xs>
                    <ShowAnswerToggle isActive={showAnswers} onToggle={setShowAnswers}/>
                </Col>
                <Col xs>
                    <EndButton onClick={handleOpenModal}/>
                </Col>
            </Row>
            <LessonCard questions={questions} answers={answers}/>
            <Modal isVisible={isModalVisible} onClose={handleCloseModal} onOk={resetAnswers}>
                <h2>Ayrılmak istediğine emin misin?</h2>
                <p>Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin.</p>
            </Modal>
        </div>
    );
};

export default LessonComponent;
