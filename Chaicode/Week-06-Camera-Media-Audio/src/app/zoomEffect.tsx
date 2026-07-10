import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

const ZoomEffect = () => {
  const [permission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [zoom, setZoom] = useState(0);
  if (!permission?.granted) return;
  //   const zoomMethod = () => {
  //     setZoom(zoom + 0.1)
  //   }
  //   const zoomMethodDe = () => {
  //     setZoom(zoom - 0.1)

  // }
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <CameraView style={{ flex: 1 }} facing={facing} zoom={zoom} />
      <View style={{ marginBottom: 65 }}>
        <Text>x{zoom.toFixed(1)}</Text>
        <Text>Zoom : {(zoom * 100).toFixed(0)}%</Text>
        <Button
          title="Switch Camera"
          onPress={() => setFacing((f) => (f === "back" ? "front" : "back"))}
        />
        <Button
          title="Zoom +"
          onPress={() => setZoom((z) => Math.max(1, z + 0.1))}
        />
        <Button
          title="Zoom -"
          onPress={() => setZoom((z) => Math.min(0, z - 0.1))}
        />

      </View>
    </View>
  );
};

export default ZoomEffect;

const styles = StyleSheet.create({});
