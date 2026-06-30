import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useAccelerometer } from "@/hooks/use-accelerometer";
import { TiltGame } from "@/components/tilt-game";

export default function Index() {

  // const { available, x, y, z } = useAccelerometer();
  // console.log(available, x, y, z);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <TiltGame/>
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


