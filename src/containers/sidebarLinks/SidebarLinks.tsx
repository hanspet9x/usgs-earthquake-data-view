import React from 'react';
import { useState } from 'react';
import SidebarLink from '../../components/sideBarLink/SidebarLink';
import { useSetEarthquakeData } from '../../context/hooks/updateEarthquakeData';
import { useSelectedData } from '../../context/hooks/useSelectedData';
import { SelectedDataType } from '../../interface/selectedDataType.types';


const SidebarLinks = () => {
    const { data } = useSetEarthquakeData();
    const { setDataType } = useSelectedData();

    const [activeName, setActiveName] = useState<SelectedDataType>('Feature');
    const onLinkClicked = (name: SelectedDataType) => {
        setActiveName(name);
        setDataType(name);
    }

    return (
        <ul>
            {/* TODO: restructure links */}
            <SidebarLink<SelectedDataType> name='Feature' count={data?.all.features.length}
                activeName={activeName} onLinkClicked={onLinkClicked} />
            <SidebarLink<SelectedDataType> name='Location'
                count={data ? Object.keys(data?.sectioned.location).length : 0}
                activeName={activeName} onLinkClicked={onLinkClicked} />
            <SidebarLink<SelectedDataType> name='Earthquake'
                count={data?.sectioned.earthquake.length}
                activeName={activeName} onLinkClicked={onLinkClicked} />
            <SidebarLink<SelectedDataType> name='Quarry'
                count={data?.sectioned.quarry.length}
                activeName={activeName} onLinkClicked={onLinkClicked} />
            <SidebarLink<SelectedDataType> name='Tsunami'
                count={data?.sectioned.quarry.length}
                activeName={activeName} onLinkClicked={onLinkClicked} />
            <SidebarLink<SelectedDataType> name='Status'
                count={data ? Object.keys(data?.sectioned.status).length : 0}
                activeName={activeName} onLinkClicked={onLinkClicked} />

        </ul>
    );
};

export default SidebarLinks;