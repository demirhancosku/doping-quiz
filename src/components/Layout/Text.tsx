import React from 'react';
import '@styles/template/Vars.scss';

interface TextProps {
    children?: React.ReactNode;
    size: "large" | "base" | "small";
    className?: string;
}

export const Text: React.FC<TextProps> = ({ children, size, className }) => {
    return <div className={`text text-${size} ${className || ''}`}>{children}</div>;
};
