import React from 'react';
import styles from '@styles/components/Buttons.module.scss';

import Play from '../../../assets/Play.png';

interface WatchVideoButtonProps {
}

const WatchVideoButton: React.FC<WatchVideoButtonProps> = () => {

    return (
        <button className={styles.watchButton}>
            <img src={Play} alt={"Çözüm Videosu"}/> Çözüm Videosu
        </button>
    );
};

export default WatchVideoButton;