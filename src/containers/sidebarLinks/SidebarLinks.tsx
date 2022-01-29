import React from 'react';
import { useMemo } from 'react';
import { useSetEarthquakeData } from '../../context/hooks/updateEarthquakeData';

const SidebarLinks = () => {
    const { data } = useSetEarthquakeData();

    return (
        <ul>

        </ul>
    );
};

export default SidebarLinks;