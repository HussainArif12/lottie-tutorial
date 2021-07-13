import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { useRef } from "react";
import SimpleAnimation from "./SimpleAnimation";
import InteractiveAnimation from "./InteractiveAnimation";
import LoadingAnimation from "./LoadingAnimation";
import SwitchAnimation from "./SwitchAnimation";
export default function App() {
  return (
    <View style={styles.container}>
      <SwitchAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 50,
    height: 50,
  },
});
