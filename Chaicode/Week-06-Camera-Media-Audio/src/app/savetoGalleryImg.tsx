import React from "react";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { ActivityIndicator,Alert,Button,Linking,Text,View,StyleSheet,} from "react-native";

async function savetoGallery(uri: string) {
  // true request write permission (iOS)
  const { granted, canAskAgain } =
    await MediaLibrary.requestPermissionsAsync(true);
  if (!granted) {
    if (!canAskAgain) {
      Alert.alert(
        "Photo library access denied",
        "Enable photo library access in settings to save photos.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ],
      );
    }
  }
  throw new Error("Photo library permission denied");
}

const savetoGalleryImg = () => {
  const cameraRef = useRef<CameraView>(null);
  const [camerpermission, requestCameraPermission] = useCameraPermissions();
  const [ready, setReady] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Camera Permission loading
  if (!camerpermission) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text>Checking camera permission</Text>
      </View>
    );
  }

  // Camera permission not granted
  if (!camerpermission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Camera access</Text>
        <Text>We need camera access to take a photo</Text>
        {!camerpermission.canAskAgain ? (
          <Button
            title="Open settings"
            onPress={() => Linking.openSettings()}
          />
        ) : (
          <Button
            title="Grant camera access"
            onPress={requestCameraPermission}
          />
        )}
      </View>
    );
  }

  const takePhoto = async () => {
    if (!cameraRef.current || !ready) {
      Alert.alert(
        "Camera not ready",
        "wait for the preview before taking photo",
      );
      return;
    }

    try {
      setStatus(null);
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.86 });

      if (photo?.uri) {
        setPhotoUri(photo.uri);
        setStatus("Photo Captured (stored in app cache.)");
      }
    } catch (error) {
      Alert.alert(
        "Photo failed",
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  };

  
};

export default savetoGalleryImg;

const styles = StyleSheet.create({});
