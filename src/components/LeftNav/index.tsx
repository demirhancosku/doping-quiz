import React from 'react';
import '@styles/components/LeftNav.scss';

import SidebarImg from '../../assets/Sidebar.png'
export const LeftNav: React.FC= () => {
    return (
        <aside className={"left-nav"}>
            <img src={SidebarImg} alt="Fullscreen" className={"fullscreen-image"} />
        </aside>
    )
};
