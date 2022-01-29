import React from 'react';
import { useMemo } from 'react';
import { useSetEarthquakeData } from '../../context/hooks/updateEarthquakeData';
import { sidebarLinkAction } from './action';

const SidebarLinks = () => {
    const { data } = useSetEarthquakeData();
    const sideBarData = useMemo(() => {
        return sidebarLinkAction.seperateData(data?.features)
    }, []);

    return (
        <ul>

        </ul>
    );
};

export default SidebarLinks;