import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { SiOpenwrt } from 'react-icons/si';

const SideBar = () => {
    return (
        <div className="sidebar-header-comps">
            <h1>Beware</h1>
            <h5>Earthquake brief  and realtime data.</h5>
            <div>
                <BsArrowRepeat />
                <SiOpenwrt />
            </div>a
        </div>
    );
};

export default SideBar;