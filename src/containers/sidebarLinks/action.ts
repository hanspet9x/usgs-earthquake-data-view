import { IEarthquakeFeature } from "../../services/earthquake/interfaces/EarthResponseFeature.types";
import {
} from "../../services/earthquake/interfaces/EarthResponseFeatureProp";
import { IAppDataSectioned } from "../../interface/appDataSectioned.types";

let accumulator: IAppDataSectioned = {
  earthquake: [],
  location: {},
  quarry: [],
  status: {},
  tsunami: [],
};

export const sidebarLinkAction = {
  seperateData(data?: IEarthquakeFeature[]) {
    if(data) {
        return data.reduce((accumulator, {properties}) => {
            //location
            
            const location = accumulator.location[properties.place];
      
            if (location) {
              //add to existing...
              location.unshift(properties);
            } else {
              accumulator.location[properties.place] = [properties];
            }
      
            //earthquake and quarry
            if (properties.type === "earthquake") {
              accumulator.earthquake.unshift(properties);
            } else {
              accumulator.quarry.unshift(properties);
            }
      
            //tsunami
            if (properties.tsunami === 1) accumulator.tsunami.unshift(properties);
      
            //status
            const status = accumulator.status[properties.status];
            if (status) {
              status.unshift(properties);
            } else {
              accumulator.status[properties.status] = [properties];
            }
      
            return accumulator;
          }, accumulator);
    }
    return accumulator;
  },
};
