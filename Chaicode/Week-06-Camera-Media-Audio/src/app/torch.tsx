import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CameraView, type FlashMode, useCameraPermissions } from "expo-camera";

const TorchScreen = () => {
  const [permission] = useCameraPermissions();
  const [flash, setFlash] = useState<FlashMode>("off");
  const [torch, setTorch] = useState(false);

  if (!permission?.granted) {
    return <Text>No camera permission</Text>;
  }
  const cycleFlash = () => {
    setFlash((f) => (f === "off" ? "on" : f === "on" ? "auto" : "off"));
  };

  return (
    <View style={{ flex: 1 , width:"100%"}}>
      <CameraView
        style={{ flex: 1, width:"100%" }}
        facing="back"
        flash={flash}
        enableTorch={torch}
      />
      <View style={{paddingBottom: 30,}}>
        <Button title={`Flash: ${flash}`} onPress={cycleFlash} />
        <Button
          title={`Torch: ${torch ? "On" : "Off"}`}
          onPress={() => setTorch((t) => !t)}
        />
      </View>
    </View>
  );
};

export default TorchScreen;

const styles = StyleSheet.create({});
