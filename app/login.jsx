import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { hp, wp } from "../helper/common";

import Input from "../components/input";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Fill all the fields");
      return;
    }
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Login", error.message);
    }
  };

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton router={router} />

        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formLabel}>Please login to continue</Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />
          <Text style={styles.forgetPassword}>Forget Password?</Text>

          {/* Button */}
          <Button
            title="Login"
            loading={loading}
            onPress={onSubmit}
            titleStyle={{ color: "#ffffff" }}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push("signUp")}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
    backgroundColor: "#f9f9f9",
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: "#333333",
    marginBottom: hp(1),
  },
  form: {
    marginTop: hp(4),
  },
  formLabel: {
    fontSize: hp(2),
    color: "#7a7a7a",
    marginBottom: hp(3),
    textAlign: "center",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    fontSize: hp(2),
    backgroundColor: "#ffffff",
    marginBottom: hp(2),
  },
  forgetPassword: {
    alignSelf: "flex-end",
    fontSize: hp(1.8),
    color: "#4CAF50",
    fontWeight: "600",
    marginBottom: hp(4),
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: hp(6),
  },
  buttonText: {
    color: "#ffffff",
    fontSize: hp(2.2),
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row", // Align Text and Pressable horizontally
    justifyContent: "center", // Center the content
    alignItems: "center", // Align items vertically
    marginTop: hp(3), // Add some spacing from the form/button
  },
  footerText: {
    fontSize: hp(2), // Consistent font size
    color: "#7a7a7a", // Subtle gray color for the text
  },
  footerLink: {
    fontSize: hp(2), // Same size as footerText for consistency
    color: "#4CAF50", // Green color for the link
    fontWeight: "600", // Slightly bold for emphasis
    marginLeft: wp(1), // Add space between "Don't have an account?" and "Sign Up"
  },
});
