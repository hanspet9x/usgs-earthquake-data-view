import { useContext } from "react";
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";
import { getAppSectionedData } from "../actions/sectionAppData.action";
import { AppContext } from "../Provider";

export const useSetEarthquakeData = () => {
  const {state, dispatch} = useContext(AppContext);
  const setData = (all: IEarthquakeResponse) => {
      //seperate data..
    const sectioned = getAppSectionedData(all.features);
    dispatch({ type: "data", payload: { all, sectioned } });
  };
  return { data: state.data, setData };
};
