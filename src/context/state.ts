import { IAppDataSectioned } from '../interface/appDataSectioned.types';
import { IEarthquakeResponse } from '../services/earthquake/interfaces/EarthquakeResponse.types';
import { IAppState } from './interface/appState.types';

export const AppState: IAppState = {
    data: {} as {
        all: IEarthquakeResponse;
        sectioned: IAppDataSectioned;
    },
    dataReloadedDate: 0,
    selectedDataType: "Feature"
}