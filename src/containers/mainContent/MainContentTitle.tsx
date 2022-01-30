import React from "react";
import { IEarthquakeFeatureProps } from "../../services/earthquake/interfaces/EarthResponseFeatureProp";
import "./index.scss";
import MainContent from "./MainContent";
interface Props {
  data: IEarthquakeFeatureProps[];
  title: string;
}
const MainContentTitle = ({ data, title }: Props) => {
  return (
    <div className="main-content-title">
      <h3>{title.toUpperCase()}</h3>
      {data.map((item, i) => <MainContent data={item} key={i} />)}
    </div>
  );
};

export default MainContentTitle;
