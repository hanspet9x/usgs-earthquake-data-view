import React from "react";
import { useMemo } from "react";
import { useSetEarthquakeData } from "../../context/hooks/updateEarthquakeData";
import { useSelectedData } from "../../context/hooks/useSelectedData";
import MainContent from "../mainContent/MainContent";
import MainContentTitle from "../mainContent/MainContentTitle";
import "./index.scss";
const MainContainer = () => {
  const { type } = useSelectedData();
  const { data } = useSetEarthquakeData();

  // console.log(type);
  // console.log(data);

  const getscreen = useMemo(() => {
    // const getScreenData = () => {
    switch (type) {
      case "Feature":
        return data?.all.features.map((feat, e) => (
          <MainContent key={e} data={feat.properties} />
        ));

      case "Earthquake":
        return data?.sectioned.earthquake.map((section, e) => (
          <MainContent key={e} data={section} />
        ));
      case "Quarry":
        return data?.sectioned.quarry.map((section, e) => (
          <MainContent key={e} data={section} />
        ));
      case "Tsunami":
        return data?.sectioned.tsunami.map((section, e) => (
          <MainContent key={e} data={section} />
        ));
      case "Location":
        return Object.entries(data.sectioned.location).map(
          ([nKey, value], i) => (
            <MainContentTitle key={i} title={nKey} data={value} />
          )
        );
      case "Status":
        return Object.entries(data.sectioned.status).map(([nKey, value], i) => (
          <MainContentTitle key={i} title={nKey} data={value} />
        ));
      default:
        return <></>;
      // }
    }
  }, [
    data?.all.features,
    data.sectioned.earthquake,
    data.sectioned.location,
    data.sectioned.quarry,
    data.sectioned.status,
    data.sectioned.tsunami,
    type,
  ]);

  return (
    <div className="main-container">
      <h3>{type}</h3>
      <div className="main-scroll">{getscreen}</div>
    </div>
  );
};

export default MainContainer;
