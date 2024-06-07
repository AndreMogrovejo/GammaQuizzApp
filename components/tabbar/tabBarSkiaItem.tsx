import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import {
  BOTTOM_BAR_HEIGHT,
  BOTTOM_BAR_ITEM_WIDTH,
  CURVE_END,
  CURVE_HEIGHT,
  CURVE_START,
  cpx1,
  cpx2,
  cpx3,
  cpx4,
  cpx5,
  cpx6,
  cpy1,
  cpy2,
  cpy3,
  cpy4,
  cpy5,
  cpy6,
} from "./constants";

const TabBarSkiaItem = ({
  focused,
  onPress,
  icon,
}: {
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: React.ReactNode;
  icon:
    | ((props: {
        focused: boolean;
        color: string;
        size: number;
      }) => React.ReactNode)
    | undefined;
}) => {
  const progress = useDerivedValue(() => {
    return focused ? withTiming(1) : withTiming(0);
  }, [focused]);

  const path = useDerivedValue(() => {
    const _path = Skia.Path.Make();
    _path.moveTo(0, 0);
    _path.lineTo(CURVE_START - 20, 0);

    _path.cubicTo(
      cpx1,
      progress.value * cpy1,
      cpx2,
      progress.value * cpy2,
      CURVE_START,
      progress.value * (CURVE_HEIGHT / 2)
    );

    // central curve
    _path.cubicTo(
      cpx3,
      progress.value * cpy3,
      cpx4,
      progress.value * cpy4,
      CURVE_END,
      progress.value * (CURVE_HEIGHT / 2)
    );

    _path.cubicTo(
      cpx5,
      progress.value * cpy5,
      cpx6,
      progress.value * cpy6,
      CURVE_END + 20,
      0
    );

    _path.lineTo(BOTTOM_BAR_ITEM_WIDTH, 0);
    _path.lineTo(BOTTOM_BAR_ITEM_WIDTH, BOTTOM_BAR_HEIGHT);
    _path.lineTo(0, BOTTOM_BAR_HEIGHT);
    _path.close();
    return _path;
  }, [progress]);

  //handle the touch event
  const touch = Gesture.Tap()
    .runOnJS(true)
    .onEnd(() => {
      onPress();
    });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: -24,
        },
        {
          translateY: -22,
        },

        {
          translateY: -progress.value * 32,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={touch}>
      <View style={styles.container}>
        <Canvas style={styles.container}>
          <Path path={path} color={"#fff"} />
        </Canvas>
        <Animated.View style={[styles.item, animatedIconStyle]}>
          {icon && icon({ focused, color: "#FD6D6A", size: 24 })}
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

export default TabBarSkiaItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    position: "absolute",
    top: "50%",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F3",
    borderRadius: 16,
    padding: 8,
  },
});
