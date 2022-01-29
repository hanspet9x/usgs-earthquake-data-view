import { configs } from "../../configs/config";
import { SubscriptionService } from "../../services/subscription/SubscriptionService"
import { minToMilliseconds } from "../../utils/utils";
import { EarthquakeService } from './../../services/earthquake/EarthquakeService';
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";
import { IAPIResponse } from "../../services/api/interface/api.types";

export const sidebarAction = {
    autoSyncUpdates(callback: (data: IAPIResponse<IEarthquakeResponse>)=> void){
        EarthquakeService.watch(minToMilliseconds(configs.watchMin), callback)
    },

    stopAutoSyncUpdates(){
        EarthquakeService.stopWatch();
    },

    async subscribe() {
        await SubscriptionService.subscribe();
    }

}