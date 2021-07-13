import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function SwitchAnimation() {
  const animation = useRef(null);
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!on) {
      animation.current.play(0, 27);
    } else {
      animation.current.play(27, 51);
    }
  }, [on]);

  return (
    <View>
      <Pressable onPress={() => setOn((old) => !old)}>
        <LottieView
          ref={animation}
          source={require("./assets/67255-switch-toggle.json")}
          style={styles.animation}
          loop={false}
          autoPlay={false}
        />
      </Pressable>
      <Text> {on ? "On" : "Off"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});
