import React from 'react';
import { useMemo } from 'react';
import { useSetEarthquakeData } from '../../context/hooks/updateEarthquakeData';
import { sidebarLinkAction } from './action';

const SidebarLinks = () => {
    const { data } = useSetEarthquakeData();

    return (
        <ul>

        </ul>
    );
};

export default SidebarLinks;