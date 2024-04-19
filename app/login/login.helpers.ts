import { User } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";

import { supabase } from "../supabase";

const redirectTo = makeRedirectUri();

export const extractParamsFromUrl = (url: string) => {
  const parsedUrl = new URL(url);
  const params = parsedUrl.searchParams; // Using searchParams instead of splitting on "#"

  const data = {
    access_token: params.get("access_token"),
    expires_in: parseInt(params.get("expires_in") || "0", 10),
    refresh_token: params.get("refresh_token"),
    token_type: params.get("token_type"),
    provider_token: params.get("provider_token"),
    code: params.get("code")
  };

  return data;
};

export const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token
  });
  if (error) throw error;
  return data;
};

export const performOAuth = async (
  setIsAnonymous: (payload: boolean) => void,
  setUser: (payload: User) => void
) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo,
      skipBrowserRedirect: true
    }
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo
  );

  if (res.type === "success") {
    const { url } = res;
    const data = await createSessionFromUrl(url);
    const { session, user } = data ?? {};
    if (session) setIsAnonymous(false);
    if (user) setUser(user);
  }
};
