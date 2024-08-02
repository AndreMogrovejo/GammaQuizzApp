import { useLocalSearchParams } from "expo-router";
import React from "react";
import { H3 } from "tamagui";

function category() {
  const { id } = useLocalSearchParams();
  return <H3>{id}</H3>;
}

export default category;
