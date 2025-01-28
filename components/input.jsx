import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { hp } from "../helper/common";

const Input = (props) => {
  return (
    <View
      style={[styles.container, props.containerStyles && props.containerStyles]}
    >
      {props.icon && props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor="green" // Use a valid color string
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: "green", // Use a valid color string
    borderRadius: 5,
    paddingHorizontal: 18,
    gap: 12,
  },
});
