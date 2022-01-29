import { IEarthquakeFeatureProps } from "./EarthResponseFeatureProp";

export interface IEarthquakeFeature {
  type: "Feature";
  properties: IEarthquakeFeatureProps
  geometry: {
    type: "Point";
    coordinates: number[];
  };
  id: string;
}
