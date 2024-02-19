import React from 'react';
import styles from '@styles/components/Buttons.module.scss';
import End from '../../assets/End.png';

interface EndButtonProps {
    onClick: () => void;
}

export const EndButton: React.FC<EndButtonProps> = ({onClick}) => {
    return (
        <button className={styles.endButton} onClick={onClick}>
            <img src={End} alt="Testi Bitir" /> <span>Testi Bitir</span>
        </button>
    );
};

