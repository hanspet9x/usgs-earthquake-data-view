import { useContext } from "react";
import { AppContext } from "../context/Provider";

export const useDataReloaded = () => {
    const context = useContext(AppContext);
}