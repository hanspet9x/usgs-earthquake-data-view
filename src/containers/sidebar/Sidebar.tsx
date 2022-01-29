import React from 'react';
import SideBarHeader from '../SidebarHeader/SideBarHeader';
import SidebarLinks from '../sidebarLinks/SidebarLinks';
import './index.scss';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideBarHeader />
            <SidebarLinks />
        </div>
    );
};

export default Sidebar;