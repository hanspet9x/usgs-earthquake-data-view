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


  export const getAppSectionedData = (data?: IEarthquakeFeature[]) =>{
    if(data) {
        return data.reduce((accumulator, {properties, geometry, id}) => {
            //location
            const nProperty = {...properties, coordinates: geometry.coordinates, id}
            
            const location = accumulator.location[nProperty.place];
      
            if (location) {
              //add to existing...
              location.unshift(nProperty);
            } else {
              accumulator.location[nProperty.place] = [nProperty];
            }
      
            //earthquake and quarry
            if (nProperty.type === "earthquake") {
              accumulator.earthquake.unshift(nProperty);
            } else {
              accumulator.quarry.unshift(nProperty);
            }
      
            //tsunami
            if (nProperty.tsunami === 1) accumulator.tsunami.unshift(nProperty);
      
            //status
            const status = accumulator.status[nProperty.status];
            if (status) {
              status.unshift(nProperty);
            } else {
              accumulator.status[nProperty.status] = [nProperty];
            }
      
            return accumulator;
          }, accumulator);
    }
    return accumulator;
  };
