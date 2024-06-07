import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Text, Image, View } from "react-native";
import { router } from "expo-router";
import * as Linking from "expo-linking";

import { styles } from "./login.screen.styles";
import { useAuthStore } from "@/stores/auth/auth.store";
import { createSessionFromUrl } from "./login.helpers";
import { supabase } from "@/app/supabase";
import Animated from "react-native-reanimated";
import { BackdropBlur, Canvas, Fill } from "@shopify/react-native-skia";
import BlurBackground from "../box/BlurBox/components/BlurBackground/BlurBackground";
import { Button } from "tamagui";
import { ChevronLeft } from "@tamagui/lucide-icons";

const SignIn = () => {
  const isAnonymous = useAuthStore((state) => state.isAnonymous);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setIsAnonymous = useAuthStore((state) => state.setIsAnonymous);
  const setUser = useAuthStore((state) => state.setUser);

  async function signInWithEmail() {
    try {
      setLoading(true);
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      const { session, user } = data ?? {};
      if (!session || !user) {
        throw new Error("Verify your email and password");
      }
      if (session) setIsAnonymous(false);
      if (user) setUser(user);
      setLoading(false);
    } catch (error: any) {
      if (error) Alert.alert(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmail() {
    try {
      setLoading(true);
      const { data } = await supabase.auth.signUp({
        email,
        password,
      });
      const { session, user } = data ?? {};
      if (!session || !user) {
        throw new Error("user could not be created");
      }
      setIsAnonymous(false);
      setUser(user);
      setLoading(false);
    } catch (error: any) {
      if (error) Alert.alert(error?.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isAnonymous) {
      setTimeout(() => {
        router.replace("/");
      }, 1000);
    }
  }, [isAnonymous]);

  // Handle linking into app from email app.
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  const isDisabled = loading || !email || !password;

  const renderLogin = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.body}>Welcome back you've been missed!</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.signInButton}
          onPress={signInWithEmail}
          disabled={isDisabled}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signUpWithEmail} disabled={isDisabled}>
          <Text
            style={[
              styles.buttonsText,
              {
                fontWeight: "bold",
                lineHeight: 30,
                textAlign: "right",
                marginTop: 20,
              },
            ]}
          >
            First Time? Sign Up now!
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 32 }}>
          Or continue with
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/google-logo.png",
              }}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate("Welcome")}
            style={styles.button1}
          >
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
              }}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate("Welcome")}
            style={styles.button1}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
              }}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={{
          marginLeft: 12,
          marginBottom: 12,
          backgroundColor: "rgba(222, 222, 222, 0.4)",
        }}
        onPress={() => router.navigate("/")}
        alignSelf="flex-start"
        icon={ChevronLeft}
        scaleIcon={1.6}
        size="$3"
      ></Button>
      <Animated.View style={[styles.wrapper]}>
        {renderLogin()}
        <Canvas style={styles.background}>
          <BackdropBlur blur={4}>
            <Fill color="rgba(222, 222, 222, 0.4)" />
          </BackdropBlur>
        </Canvas>
      </Animated.View>
      <BlurBackground />
    </SafeAreaView>
  );
};

export default SignIn;
