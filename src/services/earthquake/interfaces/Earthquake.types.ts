import { EarthquakeSortTypes } from "./EarthquakeSort.types";

export interface IEarthquake {
    getData(): Promise<void>;
    watch(): Promise<void>;
    stopWatch(): Promise<void>;
    sort(by: EarthquakeSortTypes):Promise<void>;
}