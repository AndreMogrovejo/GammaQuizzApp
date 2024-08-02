import "@tamagui/core/reset.css";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";
import { config } from "@tamagui/config/v2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";
import { TamaguiProvider, createTamagui } from "tamagui";

import { ProvidersProps as Props } from "./Providers.types";

import { useColorScheme } from "@/components/useColorScheme.web";
import { getQueryClient } from "@/config/reactQuery.config";

const Providers: React.FC<Props> = (props) => {
  const { children } = props;
  const colorScheme = useColorScheme();
  const tConfig = createTamagui(config);
  const queryClientRef = useRef<QueryClient>(getQueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <TamaguiProvider config={tConfig}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {children}
        </ThemeProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default Providers;
