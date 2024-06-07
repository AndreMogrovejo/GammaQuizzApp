import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { ReactNode } from "react";
import TabBarSkiaItem from "./tabBarSkiaItem";

export default function TabBarSkia({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as ReactNode;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarSkiaItem
            onPress={onPress}
            focused={isFocused}
            key={route.key}
            onLongPress={onLongPress}
            label={label}
            icon={options.tabBarIcon}
          />
        );
      })}
    </>
  );
}
