// Auth store

import { create } from "zustand";

import { defaultValues } from "./auth.store.helpers";
import { AuthStoreValues } from "./auth.store.types";

import { getStoreSetState } from "@/utils/store.utils";

export const useAuthStore = create<AuthStoreValues>((set, get) => {
  return {
    ...defaultValues,
    setIsAnonymous: payload => {
      const prev = get().isAnonymous;
      const isAnonymous = getStoreSetState(payload, prev);
      set({ isAnonymous });
    },
    setUser: payload => {
      const prev = get().user;
      const user = getStoreSetState(payload, prev);
      set({ user });
    },
    reset: () => set({ ...defaultValues })
  };
});
