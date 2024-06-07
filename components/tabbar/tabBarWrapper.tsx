import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import TabBarSkia from "./tabBarSkia";

const TabBarWrapper = (props: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      <TabBarSkia {...props} />
    </View>
  );
};

export default TabBarWrapper;

const styles = StyleSheet.create({
  tabBar: {
    bottom: 20, // here you can use the bottom inset for more flexbility
    width: "100%",
    height: 60,
    right: 0,
    position: "absolute",
    backgroundColor: "#transparent",
    borderRadius: 15,
    flexDirection: "row",
  },
});
