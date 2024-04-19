import { Dimensions } from "react-native";
import BlurCircle from "./components/BlurCircle/BlurCircle";
import styles from "./styles";
import { BlurMask, Canvas } from "@shopify/react-native-skia";
import React, { useRef } from "react";

const BlurBackground = (): JSX.Element => {
  const { width, height } = Dimensions.get("window");
  /** Radius of circle */
  const r = useRef(width / 2.5).current;
  /** An array responsible for how many circles will be located on the screen */
  const circles = useRef(new Array(6).fill(1)).current;
  /** The distance the elements will be located from each other */
  const step = height / circles.length;

  return (
    <Canvas style={styles.background}>
      <BlurMask blur={50} style="normal" />

      {circles.map((_, index) => (
        <BlurCircle
          key={index}
          // Arrange elements in a checkerboard pattern
          cx={index % 2 ? height : 0}
          cy={step * index}
          r={r}
          delay={index * 1000}
        />
      ))}
    </Canvas>
  );
};

export default BlurBackground;