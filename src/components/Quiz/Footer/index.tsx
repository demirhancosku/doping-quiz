import React from 'react';
import styles from '@styles/components/Quiz/Footer.module.scss';
import {useQuiz} from "@contexts/QuizContext";
import {NavigationButton} from "@components/Buttons";


const Footer: React.FC = () => {
    const {questions, currentQuestion, navigate} = useQuiz();

    const currentIndex = questions.findIndex(q => q.id === currentQuestion?.id);
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < questions.length - 1;

    return (
        <div className={styles.footerContainer}>
            <NavigationButton
                text={'Önceki Soru'}
                enabled={hasPrev}
                direction={'prev'}
                onClick={() => {
                    navigate(true)
                }}
            />

            <NavigationButton
                text={'Sonraki Soru'}
                enabled={hasNext}
                direction={'next'}
                onClick={() => {
                    navigate(false)
                }}
            />
        </div>
    );
};

export default Footer;