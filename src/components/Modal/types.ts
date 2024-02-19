import React from "react";

export interface ModalProps {
    children?: React.ReactNode;
    onClose: () => void;
    onOk: () => void;
    isVisible: boolean;
}
