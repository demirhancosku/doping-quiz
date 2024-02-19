import React from 'react';
import '@styles/components/Loading.scss';

const Loading: React.FC = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Loading;
