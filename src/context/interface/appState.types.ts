import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";

export interface IAppState{
    data: IEarthquakeResponse | undefined,
    dataReloadedDate: number;
}