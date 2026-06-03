import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/Colors";

const OnboardingScreen = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {/* Circle */}
      <View style={styles.outercircle}>
        <Image
          source={require("@/assets/images/onboarding_screen.png")}
          style={styles.onImg}
          resizeMode="cover"
        />
      </View>

      <View>
        <View style={styles.Onrating}>
          <Image source={require("@/assets/icon/rating_icon.png")} />
          <Text>Top Rated</Text>
        </View>
      </View>

      {/* Middle  Info */}
      <View>
        <Text style={styles.onHeading}>Gourmet flavors, </Text>
        <Text style={styles.onHLHeading}>delivered to your door.</Text>
        <Text style={styles.onText}>
          Experience the best local restaurants with ultra-fast delivery and
          premium service tailored for you.
        </Text>
        <View style={styles.dotnavcontainer}>
          <View style={styles.dotnav1}></View>
          <View style={styles.dotnav2}></View>
          <View style={styles.dotnav3}></View>
        </View>
      </View>

      {/* Bottom */}
      <View>
        {/* Button with icon */}
        <View>
          <Pressable style={styles.onButton}>
            <Text style={styles.onButtonText}>Next</Text>
            <FontAwesome style={styles.onButtonIcon} name="arrow-right" />
          </Pressable>
        </View>

        {/* SubText */}
        <View style={styles.onsubContainer}>
          <Text style={styles.onsubtext}>Already have an account?</Text>
          <Text style={styles.onsubtextHigh}>Login</Text>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  outercircle: {
    borderColor: Colors.heading_dark_text,
    borderWidth: 1,
    borderRadius: 300,
    borderStyle: "dashed",
  },
  onImg: {
    width: 300,
    height: 300,
    zIndex: 10,
  },

  Onrating: {
    width: 110,
    flexDirection: "row",
    backgroundColor: Colors.heading_white,
    zIndex: 1,
    padding: 12,
    borderRadius: 30,
    transform: [{ translateX: -80 }, { translateY: -75 }],
    justifyContent: "center",
  },

  onHeading: {
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 30,
    fontFamily: "PlusJakartaSans_700Bold",
    textAlign: "center",
  },

  onHLHeading: {
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 30,
    textAlign: "center",
    color: Colors.heading_dark_text,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  onText: {
    fontSize: 16,
    letterSpacing: 0.16,
    color: Colors.text_grey_light,
    lineHeight: 24,
    fontFamily: "PlusJakartaSans_400Regular",
    textAlign: "center",
  },

  dotnavcontainer: {
    flexDirection: "row",
    margin: 21,
    gap: 6,
    justifyContent: "center",
  },
  dotnav1: {
    width: 30,
    height: 10,
    backgroundColor: Colors.heading_dark_text,
    borderRadius: 12,
  },

  dotnav2: {
    width: 10,
    height: 10,
    backgroundColor: Colors.grey_bg_light,
    borderRadius: 60,
  },
  dotnav3: {
    width: 10,
    height: 10,
    backgroundColor: Colors.grey_bg_light,
    borderRadius: 60,
  },

  onButton: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    gap: 12,
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.heading_dark_text,
    borderRadius: 24,
  },
  onButtonText: {
    fontSize: 28,
    color: Colors.heading_white,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  onButtonIcon: {
    fontSize: 20,
    marginTop: 15,
    color: Colors.heading_white,
  },
  onsubContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  onsubtext: {
    fontSize: 15,
    letterSpacing: 0.16,
    color: Colors.text_grey_light,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    textAlign: "center",
    marginTop: 12,
  },

  onsubtextHigh: {
    fontSize: 15,
    letterSpacing: 0.16,
    color: Colors.heading_dark_text,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    textAlign: "center",
    marginLeft: 6,
    marginTop: 12,
    paddingBottom: 12,
  },
});
