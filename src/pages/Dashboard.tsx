import React from 'react';
import ProgressBar from '../components/progressBar/ProgressBar';
import Sidebar from '../containers/sidebar/Sidebar';

const Dashboard = () => {
    //call api
    return (
        <div>
            <ProgressBar name='Magnitude' value='40' />
            <Sidebar />
        </div>
    );
};

export default Dashboard;