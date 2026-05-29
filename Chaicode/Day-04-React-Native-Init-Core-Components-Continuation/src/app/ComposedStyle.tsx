import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./Colors";

const ComposedStyle = () => {
const isActive = true;

const buttonStyle = StyleSheet.compose(
  styles.button,
  isActive ? styles.activeButton : null,
);

return (
    <SafeAreaView>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.title}>index</Text>
        <Text style={styles.subtitle}>index</Text>
      </View>

      {/* Stylesheet 2 1:10:57 Timestamp */}
      <View style={styles.container}>
        <View style={[styles.button, isActive && styles.activeButton]}>
          <Text style={styles.buttonText} >Composed Style</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ComposedStyle;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 3, /// for andriod

    // add these 3 properties for iOS -- effect like elevation
    shadowColor: "%000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
  },

  // Style sheet 2  Button Styling 1:10:57 Timestamp
  container: {
    // flex: 1, //
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc", // default color
  },

  activeButton: {
    backgroundColor: "#6c63ff", // it will override current color
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
