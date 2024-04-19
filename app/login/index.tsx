import { Github, Loader2 } from "@tamagui/lucide-icons";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "tamagui";

import { createSessionFromUrl, performOAuth } from "./login.helpers";
import { styles } from "./login.screen.styles";

import EmailForm from "@/components/EmailForm";
import { useAuthStore } from "@/stores/auth/auth.store";

WebBrowser.maybeCompleteAuthSession(); // required for web only

export default function Auth() {
  const isAnonymous = useAuthStore(state => state.isAnonymous);
  const setIsAnonymous = useAuthStore(state => state.setIsAnonymous);
  const setUser = useAuthStore(state => state.setUser);

  useEffect(() => {
    if (!isAnonymous) {
      alert("You are logged in, go back Gilaso");
      setTimeout(() => {
        router.replace("/");
      }, 1000);
    }
  }, [isAnonymous]);

  // Handle linking into app from email app.
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);
  const [loading] = useState(false);

  // to warm up the browser
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Login Screen</Text>
      <View style={styles.content}>
        <EmailForm />
        <Button
          style={[styles.githubButton, { opacity: 0.7 }]}
          icon={loading ? Loader2 : Github}
          onPress={() => performOAuth(setIsAnonymous, setUser)}
          disabled={true}
        >
          <Text style={{ color: "#fff" }}>
            {loading ? "loading" : "Sign in with GitHub"}
          </Text>
        </Button>
      </View>
    </View>
  );
}
