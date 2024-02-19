import React from 'react';
import styles from '@styles/components/Toggles.module.scss';

interface ShowAnswerToggleProps {
    isActive: boolean;
    onToggle: (i: boolean) => void;
}

export const ShowAnswerToggle: React.FC<ShowAnswerToggleProps> = ({onToggle, isActive}) => {
    const [on, setOnState] = React.useState(isActive);
    const toggle = () => {
        setOnState(o => {
            onToggle(!o)
            return !o
        })
    }
    return (
        <div className={styles.toggleButtonContainer} onClick={toggle}>
            <span>Cevapları Göster</span>
            <span>
                <button className={`${styles.toggleButton} ${on ? styles.on : ''}`}>
                    <span className={`${styles.pin} ${on ? styles.onPin : ''}`}/>
                </button>
            </span>
        </div>
    );
};


