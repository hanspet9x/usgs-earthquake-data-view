import { IEarthquakeResponse } from "./interfaces/EarthquakeResponse.types";
import { IAPIResponse } from "./../api/interface/api.types";
import { APIService } from "../api/APIService";
import { earthquakeURL } from "./url/earthquakeURL";

export class EarthquakeService {
  static watchHandler: NodeJS.Timeout;

  static getData(): Promise<IAPIResponse<IEarthquakeResponse>> {
    return APIService.get<IEarthquakeResponse>(earthquakeURL.allDay);
  }
  static watch(
    periodInMs: number,
    callback: (response: IAPIResponse<IEarthquakeResponse>) => void
  ) {
    EarthquakeService.watchHandler = setInterval(async() => {
        const data = await EarthquakeService.getData();
        callback(data);
    }, periodInMs);
  }
  static stopWatch(){
    if(EarthquakeService.watchHandler){
        clearInterval(EarthquakeService.watchHandler);
    }
  }
}
