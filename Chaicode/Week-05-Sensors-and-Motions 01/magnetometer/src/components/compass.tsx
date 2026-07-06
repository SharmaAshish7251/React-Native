import { useMagnetometer } from "@/hooks/use-magnetometer";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COMPASS_SIZE = 260;

export function CompassScreen() {
  const insets = useSafeAreaInsets();
  const { available, x, y, z, heading } = useMagnetometer();
  const rotateAnim = useRef(new Animated.Value(-heading)).current;
  const lastAngle = useRef(-heading);

  useEffect(() => {
    const desired = -heading;
    const delta = ((desired - lastAngle.current + 540) % 360) - 180;
    const target = lastAngle.current + delta;
    Animated.timing(rotateAnim, {
      toValue: target,
      duration: 420,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
    lastAngle.current = target;
  }, [heading, rotateAnim]);
  return (
    <View style={[styles.screen, { paddingTop: insets.top + 12 }]}>
      <Text style={styles.title}>Compass</Text>
      <Text style={styles.subtitle}>
        Hold the phone flat. Rotate your body - the needle points north using
        magnetometer x and y.
      </Text>

      <View style={styles.sensorBox}>
        <Text style={styles.sensorTitle}>Magnetometer</Text>
        <Text style={styles.sensorLine}>x: {x.toFixed(2)}</Text>
        <Text style={styles.sensorLine}>y: {y.toFixed(2)}</Text>
        <Text style={styles.sensorLine}>z: {z.toFixed(2)}</Text>
      </View>

      <Text style={styles.heading}>{Math.round(heading)}</Text>
      {available === false && (
        <Text style={styles.warning}>Magnetometer not available</Text>
      )}

      <View style={styles.stage}>
        <View style={styles.compassRing}>
          {Array.from({ length: 12 }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.tick,
                {
                  transform: [
                    { rotate: `${i * 30}deg` },
                    { translateY: -COMPASS_SIZE / 2 + 14 },
                  ],
                },
              ]}
            />
          ))}

          <Text style={[styles.mark, styles.markNorth]}>N</Text>
          <Text style={[styles.mark, styles.markEast]}>E</Text>
          <Text style={[styles.mark, styles.markSouth]}>S</Text>
          <Text style={[styles.mark, styles.markWest]}>W</Text>

          <Animated.View
            style={[
              styles.needle,
              {
                transform: [
                  {
                    rotate: rotateAnim.interpolate({
                      inputRange: [-360, 360],
                      outputRange: ["-360deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.needleRed} />
            <View style={styles.needleWhite} />
            <View style={styles.centerCap} />
          </Animated.View>
        </View>
      </View>

      <Text style={styles.footer}>
        Needle rotation = - heading, where heading comes from atan2(x,y)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f2f6fb",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0b2545",
    marginBottom: 6,
  },
  subtitle: {
    textAlign: "center",
    color: "#425c7d",
    marginBottom: 12,
  },
  sensorBox: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  sensorTitle: {
    fontWeight: "700",
    marginBottom: 6,
    color: "#22334a",
  },
  sensorLine: {
    color: "#334b66",
    fontSize: 14,
    marginBottom: 2,
  },
  heading: {
    fontSize: 48,
    fontWeight: "800",
    color: "#0b2545",
    marginTop: 8,
  },
  warning: {
    color: "#b00020",
    marginTop: 8,
  },
  stage: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  compassRing: {
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    borderRadius: COMPASS_SIZE / 2,
    borderWidth: 6,
    borderColor: "#22334a",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  tick: {
    position: "absolute",
    left: COMPASS_SIZE / 2 - 1,
    top: COMPASS_SIZE / 2 - 6,
    width: 2,
    height: 12,
    backgroundColor: "rgba(34,51,74,0.9)",
    borderRadius: 1,
    opacity: 0.9,
  },
  mark: {
    position: "absolute",
    fontWeight: "700",
    color: "#22334a",
    fontSize: 16,
  },
  markNorth: {
    top: 8,
    left: COMPASS_SIZE / 2 - 8,
  },
  markEast: {
    right: 8,
    top: COMPASS_SIZE / 2 - 8,
  },
  markSouth: {
    bottom: 8,
    left: COMPASS_SIZE / 2 - 8,
  },
  markWest: {
    left: 8,
    top: COMPASS_SIZE / 2 - 8,
  },
  needle: {
    position: "absolute",
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  needleRed: {
    position: "absolute",
    width: 6,
    height: COMPASS_SIZE / 2,
    backgroundColor: "#d33",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    transform: [{ translateY: -COMPASS_SIZE / 4 }],
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  needleWhite: {
    position: "absolute",
    width: 6,
    height: COMPASS_SIZE / 2,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    transform: [{ translateY: COMPASS_SIZE / 4 }],
    borderWidth: 1,
    borderColor: "rgba(34,51,74,0.08)",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  centerCap: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: "#22334a",
    borderWidth: 3,
    borderColor: "#ffffff",
    elevation: 3,
  },
  footer: {
    marginTop: 18,
    color: "#6b7c93",
    textAlign: "center",
    fontSize: 12,
  },
});
