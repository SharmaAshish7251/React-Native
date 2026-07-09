import {
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from "expo-camera";
import React, { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

const VideoScreen = () => {
  //  permission handling using useCameraPermissions hook
  const [permission, requestPermission] = useCameraPermissions();
  const [micpermission, requestMicPermission] = useMicrophonePermissions();
  // useref keeps value state so it will not re-render if same value
  const cameraRef = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  
  const player = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    // autoplay
    // player.play(); 
  });
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


  const startRecording = async () => {
    if (!micpermission?.granted) {
      // ask for permission
      const result = await requestMicPermission();
      // if not quiit
      if (!result.granted) return;
    }

    // recording starts if permission granted
    setRecording(true);
    // set video duration '15sec'
    const video = await cameraRef.current?.recordAsync({ maxDuration: 15 });
    // set video path
    setVideoUri(video?.uri ?? null);
    // it will auto stop when reaches max duration
    setRecording(false);
  };

  //    to stop recording
  const stopRecording = () => {
    cameraRef.current?.stopRecording();
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing="back"
        mode="video"
        onCameraReady={() => setReady(true)}
        onMountError={({ message }) => console.warn(message)}
      />
      <Button
        title={recording ? "stop" : "record"}
        onPress={recording ? stopRecording : startRecording}
        disabled={!ready}
      />
      {videoUri && (
        <VideoView
          player={player}
          fullscreenOptions={{ enable: true }}
          allowsPictureInPicture
          contentFit="cover"
          
          style={{ width: 120, height: 120 }}
        />
      )}
      <Text>{videoUri}</Text>
      <Text>{recording ? "Stop Recording" : " Start Recording"}</Text>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
