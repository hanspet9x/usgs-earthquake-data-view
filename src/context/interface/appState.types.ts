import { IAppDataSectioned } from "../../interface/appDataSectioned.types";
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";

export interface IAppState{
    data: IEarthquakeResponse | undefined,
    dataReloadedDate: number;
    appDataSectioned: IAppDataSectioned | undefined
}