import React from "react";
import { StyleSheet, View, Text } from "react-native";

import LottieView from "lottie-react-native";
import { useState } from "react";

export default function SimpleAnimation() {
  return (
    <View>
      <LottieView
        source={require("./assets/67313-lava-preloader.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});
