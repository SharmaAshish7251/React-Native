import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";


const SAMPLE_URL = `https://testmode.in/Karle_Gunaah_Ugly_Aur_Pagli.mp3`;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  //   / tells you how many complete groups of 60 seconds there are (minutes).
  // % tells you how many seconds are left over after making those groups.
  return `${m}: ${s.toString().padStart(2, "0")}`;
}

const AudioScreen = () => {
//   const player = useAudioPlayer(require("@/assets/mp.mp3"));
  const player = useAudioPlayer(SAMPLE_URL, { downloadFirst: true });
  const status = useAudioPlayerStatus(player);

  const toggle = () => {
    if (status.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View>
      <Text>
        
        {status.playing ? "Playing" : "Paused"}
        {/* {player.currentTime} */}
        {formatTime(status.currentTime)} / {formatTime(status.duration)}
      </Text>
      <Button title="Play" onPress={() => player.play()} />
      <Button title="Pause" onPress={() => player.pause()} />
      <Button
        title="Replay"
        onPress={() => {
          // mention time from you wants to play
          player.seekTo(0);
          //   After reaching to time play song
          player.play();
        }}
      />
    </View>
  );
};

export default AudioScreen;

const styles = StyleSheet.create({});
