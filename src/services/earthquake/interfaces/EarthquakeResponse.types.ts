import { IEarthquakeFeature } from "./EarthResponseFeature.types"

export interface IEarthquakeResponse {
    type: "FeatureCollection",
    metadata: {
      generated: number,
      url: string,
      title: string,
      api: string,
      count: number,
      status: number
    },
    bbox: number[],
    features: IEarthquakeFeature[]
  }