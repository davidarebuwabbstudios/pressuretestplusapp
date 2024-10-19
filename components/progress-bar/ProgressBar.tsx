import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

interface ProgressBarProps {
  value: number;
  duration: number;
  ease: string;
  useNativeDriver?: boolean;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  duration = 3000,
  ease = "easeInOutExpo",
  useNativeDriver = false
}) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

//   useEffect(() => {
//     const normalizedValue = Math.max(0, Math.min(value, 1)); // Ensure value between 0 and 1
//     Animated.timing(progress, {
//       toValue: normalizedValue * 100, // Convert to percentage (0-100)
//       duration,
//       easing: Easing[ease],
//       useNativeDriver,
//     }).start();
//   }, [value, duration, ease, useNativeDriver]);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 300,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10
  },
  bar: {
    height: 20,
    backgroundColor: "#53A020",
    borderRadius: 10
  }
});

export default ProgressBar;
