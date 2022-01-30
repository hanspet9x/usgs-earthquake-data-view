import React from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { Row } from "../../components/Row/Row";
import { IEarthquakeFeatureProps } from "../../services/earthquake/interfaces/EarthResponseFeatureProp";
import { dateToString, toPercent } from "../../utils/utils";
import "./index.scss";
interface Props {
  data: IEarthquakeFeatureProps;
}
const MainContent = ({ data }: Props) => {
  return (
    <div className="main-content">
      <table>
        <tbody>
          <Row name="Title" value={"Title"}  name2="Location" value2={data.place} />
          <Row name="Time" value={dateToString(data.time)}  name2="Updated" value2={dateToString(data.updated)} />
          <Row name="Coordinate" value="col" name2="Gap" value2={data.place} /> 
        </tbody>
      </table>
      <div>
        <ProgressBar name="Magnitude" value={toPercent(data.mag, 10)+''}  />
        <ProgressBar name="Intensity" value={toPercent(data.cdi, 10)+''}  />
        <ProgressBar name="Instrumented Intensity" value={toPercent(data.mmi, 10)+''}  />
        <ProgressBar name="Significance" value={toPercent(data.sig, 1000)+''}  />
      </div>
      <div>
        <a href={data.url} target="_blank" rel="noreferrer">More info</a>
      </div>
    </div>
  );
};

export default MainContent;
