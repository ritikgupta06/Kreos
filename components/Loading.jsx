import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const Loading = ({ size = "large", color = "#15cf7f" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
