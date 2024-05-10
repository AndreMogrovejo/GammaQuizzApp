import {
  AnimatedProp,
  Canvas,
  LinearGradient,
  Rect,
  SkPoint,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, StyleProp, ViewStyle } from "react-native";

type Props = {
  enabled?: boolean;
  height: number;
  colors: string[];
  style: StyleProp<ViewStyle>;
  start: any;
  end: any;
};

const BlurEdge: React.FC<Props> = ({
  enabled,
  height,
  style,
  ...props
}: Props) => {
  if (!enabled) return null;
  const { width } = Dimensions.get("window");

  return (
    <Canvas style={[style, { height }]}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient {...props} />
      </Rect>
    </Canvas>
  );
};

BlurEdge.defaultProps = {
  enabled: true,
};

export default BlurEdge;
