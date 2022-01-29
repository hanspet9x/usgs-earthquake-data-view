import { IAppAction } from "./action.types";
import { IAppState } from "./appState.types";

export interface IContext {
    dispatch(action: IAppAction): void;
    state: IAppState;
}