import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../Provider";

export const useDataReloaded = () => {
    const {state, dispatch} = useContext(AppContext);
    const [isReloaded, setIsReloaded] = useState(false);
    const ref = useRef(0);

    const setReloaded = (data: number) => {
        dispatch({type: "dataReloadedDate", payload: data})
    }
    useEffect(() => {
        if(ref.current !== state.dataReloadedDate) {
            setIsReloaded(true);
        }else {
            setIsReloaded(false)
        }
        ref.current = state.dataReloadedDate;
    }, [state.dataReloadedDate]);

    return {isReloaded, setReloaded};
}