import React from "react";
import { View, Text } from "react-native";

import styles from "./BlurContent.styles";
import { BlurContentProps as Props } from "./BlurContent.types";

const BlurContent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>BlurContent</Text>
    </View>
  )
};

BlurContent.defaultProps = {};

export default BlurContent;