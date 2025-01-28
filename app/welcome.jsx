import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helper/common";
import Button from "../components/Button"; // Ensure Button component is imported
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />

        {/* Title and Punchline */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Kreos</Text>
          <Text style={styles.punchline}>Chill maar!!</Text>
        </View>
      </View>

      {/* Footer with Button */}
      <View style={styles.footer}>
        <Button title="Getting Started" onPress={() => router.push("signUp")} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.loginText}>Already have an account!</Text>
          <Pressable onPress={() => router.push("login")}>
            <Text style={[styles.loginText, { color: "green" }]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(80),
    marginBottom: hp(4),
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: wp(5),
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#056012",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 10,
  },
  punchline: {
    fontSize: 26,
    fontStyle: "italic",
    color: "#7f8c8d",
    fontWeight: "500",
    textAlign: "center",
    maxWidth: wp(90),
  },
  footer: {
    gap: 10,
    position: "absolute", // Positions footer over the content
    bottom: 0, // Anchors the footer to the bottom of the screen
    width: "100%", // Ensures the footer takes up the full width
    paddingBottom: hp(10),
    alignItems: "center", // Center button horizontally
    backgroundColor: "#f5f5f5", // Set background to white if required
    paddingHorizontal: wp(5),
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    textAlign: "center",
    alignItems: "center",
  },
});
