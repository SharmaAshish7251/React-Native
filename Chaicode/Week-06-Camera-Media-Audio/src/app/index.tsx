import { Text, View, StyleSheet } from "react-native";
import CameraScreen from "./camera";
import VideoScreen from "./video";
import BarcodeScanner from "./barcodeScanner";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <CameraScreen /> */}
      {/* <VideoScreen /> */}
      <BarcodeScanner />
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
