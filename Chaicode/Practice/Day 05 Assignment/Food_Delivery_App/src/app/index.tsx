import { Text, View, StyleSheet } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomeChaiCodeEats from "./screens/HomeChaiCodeEats";


export default function Index() {
  return (
    <View style={styles.container}>
      {/* <OnboardingScreen /> */}
      <HomeChaiCodeEats />
      
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
