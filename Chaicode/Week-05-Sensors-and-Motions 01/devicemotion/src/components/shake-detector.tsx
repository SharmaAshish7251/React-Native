import {
    COOLDOWN_MS,
    SHAKE_THRESHOLD,
    useShakeDetection,
} from "@/hooks/use-shake-detector";
import { useEffect, useState } from "react";
import {
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ShakeDetector() {
  const insets = useSafeAreaInsets();
  const { available, force, isShaking, shakecount, resetShakeCount } =
    useShakeDetection();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (!isShaking) return;
    setSheetOpen(true);
    const timer = setTimeout(() => setSheetOpen(false), 1000);
    return () => clearTimeout(timer);
  }, [isShaking]);

  const meterFill = Math.min((force / (SHAKE_THRESHOLD * 2)) * 100, 100);
  const statusLabel =
    available === null
      ? "Checking motion sensor..."
      : available
        ? "Sensor ready"
        : "Motion sensor unavailable";

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Shake Detector</Text>
        <Text style={styles.subtitle}>
          Move your device firmly to trigger the motion sensor.
        </Text>
      </View>

      <View style={[styles.card, isShaking && styles.cardActive]}>
        <View style={styles.row}>
          <View style={styles.statusBadge}>
            <View
              style={[
                styles.statusDot,
                available === false
                  ? styles.statusOffline
                  : styles.statusOnline,
              ]}
            />
            <Text style={styles.statusText}>{statusLabel}</Text>
          </View>
          <Text style={styles.cooldownText}>{COOLDOWN_MS} ms cooldown</Text>
        </View>

        <Text style={styles.emoji}>{isShaking ? "🤳" : "📴"}</Text>
        <Text style={styles.heroText}>
          {isShaking ? "Shake detected" : "Ready to shake"}
        </Text>

        <View style={styles.forceContainer}>
          <Text style={styles.forceValue}>{force.toFixed(1)}</Text>
          <Text style={styles.forceUnit}>m/s²</Text>
        </View>

        <View style={styles.meterTrack}>
          <View style={[styles.meterFill, { width: `${meterFill}%` }]} />
        </View>

        <Text style={styles.hintText}>
          Shake until the sensor passes {SHAKE_THRESHOLD}. Try a crisp wrist
          motion.
        </Text>

        <View style={styles.footerRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{shakecount}</Text>
            <Text style={styles.statLabel}>Shakes</Text>
          </View>
          <Pressable style={styles.resetButton} onPress={resetShakeCount}>
            <Text style={styles.resetButtonText}>Reset count</Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={sheetOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setSheetOpen(false)}
      >
        <View style={styles.backdrop}>
          <View style={[styles.sheet, { paddingBottom: insets.bottom + 20 }]}>
            <Text style={styles.sheetEmoji}>🎉</Text>
            <Text style={styles.sheetTitle}>Shake registered</Text>
            <Text style={styles.sheetSubtitle}>
              Keep shaking gently — the app is tracking motion.
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setSheetOpen(false)}
            >
              <Text style={styles.buttonText}>Got it</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0c1018",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    color: "#f8fafc",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 6,
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#131820",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 14,
  },
  cardActive: {
    borderColor: "#38bdf8",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
  },
  statusOnline: {
    backgroundColor: "#22c55e",
  },
  statusOffline: {
    backgroundColor: "#f87171",
  },
  statusText: {
    color: "#cbd5e1",
    fontSize: 13,
  },
  cooldownText: {
    color: "#94a3b8",
    fontSize: 13,
  },
  emoji: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 16,
  },
  heroText: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  forceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 14,
  },
  forceValue: {
    color: "#e0f2fe",
    fontSize: 48,
    fontWeight: "900",
  },
  forceUnit: {
    color: "#94a3b8",
    fontSize: 18,
    marginBottom: 8,
  },
  meterTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "#1e293b",
    overflow: "hidden",
    marginBottom: 14,
  },
  meterFill: {
    height: "100%",
    backgroundColor: "#38bdf8",
  },
  hintText: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 22,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    backgroundColor: "#0f172a",
  },
  statValue: {
    color: "#f8fafc",
    fontSize: 28,
    fontWeight: "800",
  },
  statLabel: {
    marginTop: 6,
    color: "#94a3b8",
    fontSize: 13,
  },
  resetButton: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    backgroundColor: "#38bdf8",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
  },
  resetButtonText: {
    color: "#0f172a",
    fontWeight: "700",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(10, 14, 23, 0.75)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#0f172a",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  sheetEmoji: {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 14,
  },
  sheetTitle: {
    color: "#f8fafc",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },
  sheetSubtitle: {
    color: "#cbd5e1",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    marginTop: 8,
    borderRadius: 16,
    paddingVertical: 14,
    backgroundColor: "#38bdf8",
    alignItems: "center",
  },
  buttonText: {
    color: "#0f172a",
    fontWeight: "700",
  },
});
