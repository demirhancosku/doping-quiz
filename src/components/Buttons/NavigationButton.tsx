import React from 'react';
import styles from '@styles/components/Buttons.module.scss';

import Left from '../../assets/chevron-left.png';
import Right from '../../assets/chevron-right.png';

interface NavigationButtonProps {
    text: string;
    enabled: boolean;
    direction: 'next' | 'prev';
    onClick: () => void
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({text, direction, enabled = true, onClick}) => {
    const label = text
    // TODO: refactor it before sending
    return (
        <button
            className={`${styles.directionalButton} ${direction} ${!enabled ? 'disabled' : ''}`}
            onClick={() => {
                enabled && onClick();
            }}
            disabled={!enabled}
        >
            {direction === 'prev' && <img src={Left} className={`${styles.icon} ${!enabled && styles.iconDisabled} `} alt={label}/>}
            {label}
            {direction === 'next' &&  <img src={Right} className={`${styles.iconNext} ${!enabled && styles.iconDisabled}`} alt={label}/>}
        </button>
    );
};

