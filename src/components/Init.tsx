import React from "react";
import { Plugins as CapacitorPlugins } from "@capacitor/core";
import { useDispatch } from "react-redux";
import { setCompletedStages } from "../store/gameSlice";
const { Storage } = CapacitorPlugins;

const Init = () => {
  const dispatch = useDispatch();

  Storage.get({ key: "stage" }).then((result: any) => {
    let ret: { value: any } = result;
    if (!ret.value) dispatch(setCompletedStages(ret.value));
  });

  return null;
};

export default Init;
