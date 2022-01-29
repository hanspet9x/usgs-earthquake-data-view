import { IEarthquakeFeatureProps } from "../services/earthquake/interfaces/EarthResponseFeatureProp";

export interface IAppDataSectioned {
    // features?: 
    location: Record<string, IEarthquakeFeatureProps[]>;
    earthquake: IEarthquakeFeatureProps[];
    quarry: IEarthquakeFeatureProps[];
    tsunami: IEarthquakeFeatureProps[];
    status: Record<string, IEarthquakeFeatureProps[]>;
  }