import React, { useRef, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

import LottieView from "lottie-react-native";

export default function InteractiveAnimation() {
  const animation = useRef(null);
  const [pressed, setPressed] = useState(false);
  return (
    <View>
      <Pressable
        onPressIn={() => {
          animation.current.resume();
          setPressed(true);
        }}
        onPressOut={() => {
          animation.current.pause();
          setPressed(false);
        }}
      >
        <LottieView
          ref={animation}
          source={require("./assets/67313-lava-preloader.json")}
          style={styles.animation}
        />
      </Pressable>
      <Text>{pressed ? "Pressed" : "Not pressed"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});
