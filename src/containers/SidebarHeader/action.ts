import { configs } from "../../configs/config";
import { SubscriptionService } from "../../services/subscription/SubscriptionService"
import { minToMilliseconds } from "../../utils/utils";
import { EarthquakeService } from './../../services/earthquake/EarthquakeService';

export const sidebarAction = {
    autoSyncUpdates(){
        EarthquakeService.watch(minToMilliseconds(configs.watchMin), (response) => {
            if(!response.error) {
                //save to global state
            }
        })
    },

    stopAutoSyncUpdates(){
        EarthquakeService.stopWatch();
    },

    async subscribe() {
        await SubscriptionService.subscribe();
    }

}