import { useState } from "react";
import { StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const themes = {
  light: {
    background: "#ffffff",
    card: "#f5f5f5",
    text: "#1a1a1a",
    subtext: "#666666",
    accent: "#6c63ff",
  },

  dark: {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    subtext: "#AAAAAA",
    accent: "#9d97ff",
  },
};

const ColorScheme = () => {
  const systemScheme = useColorScheme();
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
  const theme = isDark ? themes.dark : themes.light;

  console.log(systemScheme);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      <Text style={[styles.title, { color: theme.text }]}>
        {isDark ? "🌛 Dark Mode " : "☀ Light Mode"}
      </Text>

      <Text style={[styles.subtitle, { color: theme.subtext }]}>
        System preference : {systemScheme ?? "unknown"}
      </Text>

      {/* // Toggle Row  */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, {color: theme.text}]}>Theme card 🎨</Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Color adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ColorScheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },

  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});
