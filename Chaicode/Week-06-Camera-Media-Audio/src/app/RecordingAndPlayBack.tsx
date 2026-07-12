import {
    AudioModule,
    RecordingPresets,
    setAudioModeAsync,
    useAudioPlayer,
    useAudioPlayerStatus,
    useAudioRecorder,
    useAudioRecorderState,
} from "expo-audio";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const SAMPLE_URL = `https://testmode.in/Karle_Gunaah_Ugly_Aur_Pagli.mp3`;
const RecordingAndPlayBack = () => {
  const [recordingUri, setRecodingUri] = useState<string | null>(null);
  const player = useAudioPlayer(SAMPLE_URL, { downloadFirst: true });
  const playerStatus = useAudioPlayerStatus(player);
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(recorder);

  useEffect(() => {
    (async () => {
      const permission = await AudioModule.requestRecordingPermissionsAsync();
      if (permission.granted) {
        await setAudioModeAsync({
          playsInSilentMode: true,
          allowsRecording: true,
        });
      }
    })();
  }, []);

  const ensureMic = async () => {
    const permission = await AudioModule.requestRecordingPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Microphone required, Grant mic access to record");
      return false;
    }
    return true;
  };

  const startRecording = async () => {
    if (!(await ensureMic())) return;
    await recorder.prepareToRecordAsync();
    recorder.record();
  };

  const stopRecording = async () => {
    await recorder.stop();
    if (recorder.uri) {
      setRecodingUri(recorder.uri);
    }
  };

  const playSample = () => {
    player.replace(SAMPLE_URL);
    player.seekTo(0);
    player.play();
  };

  const playRecording = () => {
    if (!recordingUri) {
      Alert.alert("No recording, Record something first");
      return;
    }
    player.replace(recordingUri);
    player.play();
  };

  return (
    <View>
      <Text>RecordingAndPlayBack</Text>
      <Text>{playerStatus.playing ? "Playing" : "Paused"}</Text>
      <Button
        title={playerStatus.playing ? "Pause" : "Resume"}
        onPress={() => (playerStatus.playing ? player.pause() : player.play())}
      />

      <Button title="Play Sample" onPress={playSample} />
      <Button
        title="Play my recording"
        onPress={playRecording}
        disabled={!recordingUri}
      />

      <Text>
        Recorder : {recorderState.isRecording ? "Recording" : "Idle"}
        {Math.round(recorderState.durationMillis / 1000)}s
      </Text>
      <Button
        title={recorderState.isRecording ? "Stop recording" : "Start recording"}
        onPress={recorderState.isRecording ? stopRecording : startRecording}
      />

      {recordingUri && (
        <Text selectable numberOfLines={2}>
          {recordingUri}
        </Text>
      )}
    </View>
  );
};

export default RecordingAndPlayBack;

const styles = StyleSheet.create({});
