import * as ScreenOrientation from "expo-screen-orientation";
import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UseWindowDimensions = () => {
  const { height,width } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;


  const locklandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: width * 0.06 }}>Responsive Text</Text>

      <View style={{ flexDirection: isTablet ? "row" : "column" }}>
        {/* Card 1 */}
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#6c63ff",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 1</Text>
        </View>

        {/* Card 2 */}
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#ff6584",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 2</Text>
        </View>
      </View>

      <Text style={{ color: "#888", marginTop: 16 }}>
        Screen: {Math.round(width)} x {Math.round(height)}
        {isLandscape ? "(Landspace)" : "(Portrait)"}
      </Text>

      {/* Orientation Button */}
      <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
        <Pressable
          onPress={locklandscape}
          style={{
            flex: 1,
            backgroundColor: "#6c63ff",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Landscape</Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#ff6584",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}> Force Portrait </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UseWindowDimensions;

const styles = StyleSheet.create({});
