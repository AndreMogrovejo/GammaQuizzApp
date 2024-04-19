import { styled } from "nativewind";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <StyledView className="flex-1 items-center justify-center">
          <StyledText className="text-slate-800">Try editing me! 🎉</StyledText>
        </StyledView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center"
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: "center"
  }
});
