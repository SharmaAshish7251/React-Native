import { Text, View, StyleSheet } from "react-native";
import CameraScreen from "./camera";
import VideoScreen from "./video";
import BarcodeScanner from "./barcodeScanner";
import TorchScreen from "./torch";
import ZoomEffect from "./zoomEffect";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <CameraScreen /> */}
      {/* <VideoScreen /> */}
      {/* <BarcodeScanner /> */}
      {/* <TorchScreen /> */}
      <ZoomEffect />
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
