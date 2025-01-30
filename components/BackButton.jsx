import { Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "../assets/icons";
import { useRouter } from "expo-router"; // Assuming you're using expo-router

const BackButton = ({ size = 26 }) => {
  const router = useRouter(); // Using useRouter here

  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color="green" />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
