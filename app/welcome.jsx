import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helper/common";

const Welcome = () => {
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
    textAlign: "center",
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
});
