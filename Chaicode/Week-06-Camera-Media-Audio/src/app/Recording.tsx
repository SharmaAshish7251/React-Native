import { StyleSheet, Alert, Button, Text, View } from "react-native";
import { useEffect } from "react";
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioRecorder,
  useAudioRecorderState,
} from "expo-audio";

const RecordingScreen = () => {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const state = useAudioRecorderState(recorder);

  useEffect(() => {
    (async () => {
      const permission = await AudioModule.requestRecordingPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Microphone required, Grant Mic Access");
        return;
      }
      await setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);

  const start = async () => {
    await recorder.prepareToRecordAsync();
    recorder.record();
  };

  const stop = async () => {
    await recorder.stop();
    Alert.alert("Saved", recorder.uri ?? "No Uri");
  };

  return (
    <View>
      <Text>RecordingScreen</Text>
      <Text>
        {state.isRecording ? "Recording...." : "Ready"}
        {Math.round(state.durationMillis / 1000)}s
      </Text>

      <Button
        title={state.isRecording ? "Stop" : "Start Recording"}
        onPress={state.isRecording ? stop : start}
      />

      {recorder.uri && (
        <Text selectable numberOfLines={2}>
          {recorder.uri}
          
        </Text>
      )}
    </View>
  );
};

export default RecordingScreen;

const styles = StyleSheet.create({});
