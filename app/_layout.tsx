import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext"; // ✅ Correct Import

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout /> {/* ✅ Ensure MainLayout is inside AuthProvider */}
    </AuthProvider>
  );
};

const MainLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout; // ✅ Ensure you are exporting the correct component
