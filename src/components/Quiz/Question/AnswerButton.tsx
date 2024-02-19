import React from 'react';
import styles from '@styles/components/Buttons.module.scss';

interface AnswerButtonProps {
    onClick: () => void
}

const AnswerButton: React.FC<AnswerButtonProps> = ({onClick}) => {

    return (
        <button
            className={styles.answerButton}
            onClick={onClick}
        > Cevapla </button>
    );
};

export default AnswerButton;