import React from "react";
import { FC } from "react";
import { useReducer } from "react";
import { IContext } from "./interface/context.types";
import { AppReducer } from "./reducerFuction";
import { AppState } from "./state";

export const AppContext = React.createContext({} as IContext);

const Provider: FC = (props) => {
    const [state, dispatch] = useReducer(AppReducer, AppState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default Provider;
