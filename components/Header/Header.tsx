import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../Themed";
import styles from "./styles";
import { SafeAreaView } from "react-native";
import { ChevronLeft } from "@tamagui/lucide-icons";
import { Button } from "tamagui";
import Animated from "react-native-reanimated";
import BlurBackground from "../box/BlurBox/components/BlurBackground/BlurBackground";

const Header = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Animated.View style={[styles.wrapper]}>
        <View
          style={[
            styles.content,
            {
              borderBottomColor: "hsla(250%, 18%, 23%, 0.2)",
            },
          ]}
        >
          <Button
            style={styles.button}
            alignSelf="flex-start"
            icon={ChevronLeft}
            size="$6"
          ></Button>
        </View>
      </Animated.View>
      <BlurBackground />
    </SafeAreaView>
  );
};

export default Header;
