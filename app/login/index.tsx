import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { Text, Image, View } from "react-native";
import { router } from "expo-router";
import { styles } from "./login.screen.styles";

const SignIn = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.body}>Welcome back you've been missed!</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter username"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={true}
            />

            <TouchableOpacity>
              <Text
                style={[
                  styles.buttonsText,
                  { fontWeight: "bold", lineHeight: 30, textAlign: "right" },
                ]}
              >
                Recovery Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sign In
              </Text>
            </TouchableOpacity>

            <Text style={{ textAlign: "center" }}>Or continue with</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
