// Auth store helper functions and data

import { AuthStoreValues } from "./auth.store.types";

import { StoreInitialValues } from "@/interfaces/stores.types";

export const defaultValues: StoreInitialValues<AuthStoreValues> = {
  isAnonymous: true,
  user: undefined
};
