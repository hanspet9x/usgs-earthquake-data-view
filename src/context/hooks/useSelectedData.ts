import { useContext } from "react";
import { SelectedDataType } from "../../interface/selectedDataType.types";
import { AppContext } from "../Provider";

export const useSelectedData = () => {
  const {state, dispatch} = useContext(AppContext);
  const setData = (type: SelectedDataType) => {
    dispatch({ type: "selectedDataType", payload: type});
  };
  return { data: state.data, setDataType: setData };
};
