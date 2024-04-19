import { StorePreviousValue, StoreSetState } from "@/interfaces/stores.types";

export const getStoreSetState = <T = unknown>(
  payload: Parameters<StoreSetState<T>>[0],
  prev: T
): T => {
  let temporalValue: StorePreviousValue<T> | T;
  if (typeof payload === "function") {
    temporalValue = (payload as StorePreviousValue<T>)(prev);
  } else {
    temporalValue = payload;
  }
  return temporalValue;
};
