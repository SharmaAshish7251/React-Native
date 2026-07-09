import {
  CameraView,
  useCameraPermissions,
  type BarcodeScanningResult,
} from "expo-camera";
import React, { useRef, useState } from "react";
import { Image, Button, StyleSheet, Text, View } from "react-native";

const BarcodeScanner = () => {
  //  permission handling using useCameraPermissions hook
  const [permission, requestPermission] = useCameraPermissions();
  // useref keeps value state so it will not re-render if same value
  const cameraRef = useRef<CameraView>(null);
  const [result, setResult] = useState<BarcodeScanningResult | null>(null);
  const lastscanned = useRef<string | null>(null);
  if (!permission) {
    return <Text>Permission Loading...........</Text>;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need Camera permission</Text>
        <Button title="Grant camera access" onPress={requestPermission} />
      </View>
    );
  }


  const onBarcodeScanned = (scan: BarcodeScanningResult) => {
    // if last scanned data equals to current data return
    if (lastscanned.current === scan.data) return;

    // assign scanned data to current
    lastscanned.current = scan.data;
    setResult(scan);
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["upc_a", "aztec", "qr"] }}
        onBarcodeScanned={onBarcodeScanned}
      
        onMountError={({ message }) => console.warn(message)}
      />
      {result && (
        <Text style={{ position: "absolute", bottom: 100, color: "white" }}>
          {result.data}
        </Text>
      )}
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({});
