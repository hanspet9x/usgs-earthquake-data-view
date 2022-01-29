import { useContext } from "react";
import { IAppDataSectioned } from "../../interface/appDataSectioned.types";
import { AppContext } from "../Provider"

export const useAppSectionedData = () => {
    const {state, dispatch} = useContext(AppContext);
    const setData = (data: IAppDataSectioned) => {
        dispatch({type: "appDataSectioned", payload: data});
    }
    return {data: state.appDataSectioned, setData};
}