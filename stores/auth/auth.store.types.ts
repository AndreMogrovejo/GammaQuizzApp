// Auth store types

import { User } from "@supabase/supabase-js";

export interface AuthStoreValues {
  isAnonymous: boolean;
  setIsAnonymous: (payload: boolean) => void;
  user?: User;
  setUser: (id: User | undefined) => void;
  reset: () => void;
}
