import { IAppDataSectioned } from "../../containers/sidebarLinks/interfaces/sidelInkData.types";
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";

export interface IAppState{
    data: IEarthquakeResponse | undefined,
    dataReloadedDate: number;
    appDataSectioned: IAppDataSectioned | undefined
}