import React from 'react';
import MainContainer from '../../containers/mainContainer/MainContainer';
import Sidebar from '../../containers/sidebar/Sidebar';
import './index.scss';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div>
                <div>Head</div>
                <MainContainer />
            </div>
        </div>
    );
};

export default Dashboard;