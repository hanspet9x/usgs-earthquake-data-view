import React from 'react';
import { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { SiOpenwrt } from 'react-icons/si';
import { useSetEarthquakeData } from '../../context/hooks/updateEarthquakeData';
import { sidebarAction } from './action';

const SideBarHeader = () => {
    const {setData} = useSetEarthquakeData();
    const [watching, setWatching] = useState(false);

    const onSyncClicked = () => {
        if(watching) {
            sidebarAction.stopAutoSyncUpdates();
            setWatching(false);
        }else {
            sidebarAction.autoSyncUpdates((data) => {
                if(!data.error) {
                    setData(data.data);
                    setWatching(false);
                    return;
                }
                //TODO: add loggerService
                alert(data.data);
            })
        }

    }

    return (
        <div className="sidebar-header-comps">
            <h1>Beware</h1>
            <h5>Earthquake brief  and realtime data.</h5>
            <div>
                {/* TODO: create input for iputing time */}
                <BsArrowRepeat title="Updates automatically" color='' onClick={onSyncClicked}/>
                {/* TODO: set earthqueake event to ge as notification.*/}
                {/* TODO: create dummy user account */}
                <SiOpenwrt title="Subscribe for triggers" onClick={sidebarAction.subscribe} />
            </div>
        </div>
    );
};

export default SideBarHeader;