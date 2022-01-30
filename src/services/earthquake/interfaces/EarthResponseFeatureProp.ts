export type IEarthquakeFeatureStatusProps = "automatic" | "reviewed" | "deleted";
export interface IEarthquakeFeatureProps {
    id?: string;
    coordinates?: number[];
    title:string;
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz: number;
    url: string;
    detail: string;
    felt: number;
    cdi: number;
    mmi: number;
    alert: string;
    status: IEarthquakeFeatureStatusProps;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin: number;
    rms: number;
    gap: number;
    magType: string;
    type: "earthquake" | "quarry";

  }