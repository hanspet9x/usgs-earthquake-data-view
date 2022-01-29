import { IAppDataSectioned } from "../../interface/appDataSectioned.types";
import { SelectedDataType } from "../../interface/selectedDataType.types";
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";

export interface IAppState{
    data?: {
        all: IEarthquakeResponse,
        sectioned: IAppDataSectioned
    },
    dataReloadedDate: number;
    selectedDataType: SelectedDataType
}