import {ModalProps} from "@components/Modal/types";
import styles from '@styles/components/Modal.module.scss';
import ReactDOM from "react-dom";

import Close from '../../assets/close.png'
import AlertCircle from "@assets/AlertCircle.png";
import React from "react";

const Modal: React.FC<ModalProps> = ({onClose, isVisible, children}) => {
    if (!isVisible) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.content}>
                    <button className={styles.closeButton} onClick={onClose}>
                        <img src={Close} alt={"Testi Bitir"}/>
                    </button>
                    <div className={styles.alertCircle}>
                        <img alt={"Dikkat"} src={AlertCircle}/>
                    </div>
                    {children}
                </div>
                <div className={styles.modalButtonContainer}>
                    <button className={styles.modalButton} onClick={onClose}>Vazgeç</button>
                    <button className={`${styles.modalButton} ${styles.danger}`} onClick={onClose}>Testten Çık</button>
                </div>
            </div>
        </div>,
        document.body
    );
};


export default Modal