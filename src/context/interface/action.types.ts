import { IAppState } from "./appState.types";

export interface IAppAction {
    type: keyof IAppState,
    payload: any;
}