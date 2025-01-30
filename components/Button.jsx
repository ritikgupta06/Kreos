import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Loading from "./Loading";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {}, // Default function
  loading = false,
  hasShadow = true,
}) => {
  // Shadow style
  const shadowStyle = hasShadow && {
    shadowColor: "#acd",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  };

  if (loading) {
    return (
      <View
        style={[styles.button, buttonStyle, { backgroundColor: "#f5f5f5" }]}
      >
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text> {/* Cleaned up */}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15cf7f",
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});
