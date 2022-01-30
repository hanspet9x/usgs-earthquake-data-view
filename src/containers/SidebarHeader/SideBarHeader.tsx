import React from "react";
import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { SiOpenwrt } from "react-icons/si";
import { useSetEarthquakeData } from "../../context/hooks/updateEarthquakeData";
import { LogService } from "../../services/log/LogService";
import { sidebarAction } from "./action";
import "./index.scss";

const SideBarHeader = () => {
  const { setData } = useSetEarthquakeData();
  const [watching, setWatching] = useState(false);

  const onSyncClicked = () => {
    if (watching) {
      sidebarAction.stopAutoSyncUpdates();
      setWatching(false);
    } else {
      sidebarAction.autoSyncUpdates((data) => {
        console.log(data);
        if (!data.error) {
          setData(data.data);
          setWatching(true);
          return;
        }
        //TODO: add loggerService
        alert(data.data);
        LogService.log(data);
      });
    }
  };

  return (
    <div className="sidebar-header">
      <div>
        <h1>Beware</h1>
        <h6>Earthquake brief and realtime data.</h6>
      </div>
      <div>
        {/* TODO: create input for iputing time */}
        <BsArrowRepeat
          title="Update data automatically"
          className="icons"
          color={watching ? 'blue' : 'black'}
          onClick={onSyncClicked}
        />
        {/* TODO: set earthqueake event to ge as notification.*/}
        {/* TODO: create dummy user account */}
        <SiOpenwrt
          title="Subscribe for triggers"
          className="icons"
          onClick={sidebarAction.subscribe}
        />
      </div>
    </div>
  );
};

export default SideBarHeader;
