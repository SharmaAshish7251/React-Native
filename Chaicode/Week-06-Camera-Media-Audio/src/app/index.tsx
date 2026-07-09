import { Text, View, StyleSheet } from "react-native";
import CameraScreen from "./camera";

export default function Index() {
  return (
    <View style={styles.container}>
      <CameraScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
