import React from "react";
import { View, Text } from "react-native";

import styles from "./BlurBox.styles";
import { BlurBoxProps as Props } from "./BlurBox.types";
import Animated from "react-native-reanimated";
import { BackdropBlur, Canvas } from "@shopify/react-native-skia";
import BlurBackground from "../box/BlurBox/components/BlurBackground/BlurBackground";

const BlurBox: React.FC<Props> = (props) => {
  const { children, customStyle } = props;
  return (
    <>
      <Animated.View style={[styles.wrapper, customStyle]}>
        {children}
        <Canvas style={styles.background}>
          <BackdropBlur blur={4}>
            {/* <Fill color="rgba(222, 222, 222, 0.4)" /> */}
          </BackdropBlur>
        </Canvas>
      </Animated.View>
      <BlurBackground />
    </>
  );
};

export default BlurBox;
