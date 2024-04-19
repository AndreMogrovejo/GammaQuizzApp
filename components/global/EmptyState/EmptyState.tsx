import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./EmptyState.styles";
import { EmptyStateProps as Props } from "./EmptyState.types";

const EmptyState: React.FC<Props> = props => {
  const { text, onPress } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      {onPress ? (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

EmptyState.defaultProps = {};

export default EmptyState;
