import { ShakeDetector } from "@/components/shake-detector";
import { StatusBar, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar barStyle={"light-content"}  />
      <ShakeDetector />
    </>
  );
}

const styles = StyleSheet.create({});
