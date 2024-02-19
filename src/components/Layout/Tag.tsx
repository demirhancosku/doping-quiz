import React from 'react';
import '@styles/template/Vars.scss';

interface TagProps {
    children?: React.ReactNode;
    className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
    return <div className={`tag ${className || ''}`}>{children}</div>;
};
