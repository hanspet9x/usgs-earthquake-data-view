import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/Provider";

export const useIsDataReloaded = () => {
    const {state} = useContext(AppContext);
    const [isReloaded, setIsReloaded] = useState(false);
    const ref = useRef(0);

    useEffect(() => {
        if(ref.current === state.dataReloadedDate) {
            setIsReloaded(true);
        }else {
            setIsReloaded(false)
        }
        ref.current = state.dataReloadedDate;
    }, [state.dataReloadedDate]);

    return isReloaded;
}