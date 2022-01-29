import { IAppAction } from "./interface/action.types";
import { IAppState } from "./interface/appState.types";

export const AppReducer = (state: IAppState, action: IAppAction) => {
    switch (action.type) {
        case "data":
            return {...state, [action.type]: action.payload}
        default:
            return state;
    }
}