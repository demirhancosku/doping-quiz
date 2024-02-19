import React from 'react';
import styles from '@styles/components/Buttons.module.scss';
import ArrowLeft from '../../assets/arrow-left.svg';

interface BackButtonProps {
    onClick: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({onClick}) => {
    return (
        <button className={styles.backButton} onClick={onClick}>
            <img src={ArrowLeft} alt="Back" />
        </button>
    );
};

