import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { hp, wp } from "../helper/common";

import Input from "../components/input";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    // Validate inputs
    if (!name) {
      Alert.alert("SignUp", "Name is required");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("SignUp", "A valid email is required");
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert("SignUp", "Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      setLoading(false);

      if (error) {
        console.error("Supabase Error:", error.message);
        Alert.alert("SignUp Error", error.message);
        return;
      }

      Alert.alert(
        "SignUp Successful",
        "Please check your email to confirm your account"
      );
      router.push("login");
    } catch (err) {
      setLoading(false);
      console.error("Unexpected Error:", err);
      Alert.alert(
        "SignUp Error",
        "Something went wrong. Please try again later."
      );
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
          <Text style={styles.welcomeText}>Let's,</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formLabel}>Please SignUp to continue</Text>

          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your Username"
            value={name}
            onChangeText={setName}
          />
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.forgetPassword}>Forget Password?</Text>

          {/* button */}
          <Button
            title="SignUp"
            loading={loading}
            onPress={onSubmit}
            titleStyle={{ color: "#ffffff" }}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Pressable onPress={() => router.push("login")}>
            <Text style={styles.footerLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
  forgetPassword: {
    alignSelf: "flex-end",
    fontSize: hp(1.8),
    color: "#4CAF50",
    fontWeight: "600",
    marginBottom: hp(4),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
  },
  footerText: {
    fontSize: hp(2),
    color: "#7a7a7a",
  },
  footerLink: {
    fontSize: hp(2),
    color: "#4CAF50",
    fontWeight: "600",
    marginLeft: wp(1),
  },
});
