import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Home Page</Text>
      <Button
        title="Go to Welcome Page"
        onPress={() => router.push("welcome")}
      />
    </ScreenWrapper>
  );
};

export default Index;
