import React from 'react';
import styles from '@styles/components/Buttons.module.scss';

import Alert from '../../assets/Alert.png';
import Brush from '../../assets/Brush.png';
import ZoomIn from '../../assets/Zoom-in.png';
import ZoomOut from '../../assets/Zoom-out.png';

import {Col, Row} from "react-flexbox-grid";


interface ImgButtonProps {
    type: 'Brush' | 'Alert' | 'ZoomIn' | 'ZoomOut';
    onClick?: () => void;
}


const ImgButton: React.FC<ImgButtonProps> = ({type, onClick}) => {
    const icons = {
        Brush,
        Alert,
        ZoomOut,
        ZoomIn
    }
    return (
        <button className={styles.imgButton} onClick={onClick}>
            <img src={icons[type]} alt="Back"/>
        </button>
    )

}

export const QuestionActionButtons: React.FC = () => {
    return (
        <Row end="xs">
            <Col xs>
                <ImgButton type={"Brush"}/>
                <ImgButton type={"ZoomIn"}/>
                <ImgButton type={"ZoomOut"}/>
                <ImgButton type={"Alert"}/>
            </Col>
        </Row>
    );
};

