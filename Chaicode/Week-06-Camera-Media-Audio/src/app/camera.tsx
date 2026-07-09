import { CameraView, useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Image, Button, StyleSheet, Text, View } from "react-native";

const CameraScreen = () => {
  //  permission handling using useCameraPermissions hook
  const [permission, requestPermission] = useCameraPermissions();
  // useref keeps value state so it will not re-render if same value
  const cameraRef = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
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
  const takePhoto = async () => {
    // give quality value between 0 to 1
    // takepictureasync captures photo
    const photo = await cameraRef.current?.takePictureAsync({ quality: 1 });
    // adding path to setPhotoUri
    if (photo?.uri) setPhotoUri(photo.uri);
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing="back"
        onCameraReady={() => setReady(true)}
        onMountError={({ message }) => console.warn(message)}
      />
      <Button title="take photo" onPress={takePhoto} disabled={!ready} />
      {photoUri && <Image source={{ uri: photoUri }} style={{ height: 200 }}  resizeMode="cover"/>}
      <Text>{photoUri}</Text>
      <Text>{ready ? "Camera ready" : " Starting Camera"}</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
