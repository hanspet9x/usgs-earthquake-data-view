import { useContext } from "react";
import { IEarthquakeResponse } from "../../services/earthquake/interfaces/EarthquakeResponse.types";
import { AppContext } from "../Provider"

export const useSetEarthquakeData = () => {
    const context = useContext(AppContext);
    const setData = (data: IEarthquakeResponse) => {
        context.dispatch({type: "data", payload: data});
    }
    return {data: context.state.data, setData};
}