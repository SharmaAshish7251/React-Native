import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable } from "react-native";
import Colors from "../utils/Colors";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans/";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans/useFonts";
import { FontAwesome } from "@expo/vector-icons";

export function OnboardingScreen() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
  });

  return (
    <View style={styles.container}>
      {/* Top Circle */}
      <View style={styles.outerCircle}>
        <View style={styles.circle}>
          <Image
            source={require("@/assets/Splash_Gourmet_Pasta.png")}
            style={styles.image}
          />
        </View>
      </View>

      {/* Floating Icon */}
      <View style={styles.floating}>
        <Image
          style={styles.floatingIcon}
          source={require("@/assets/category/rating.png")}
        />
        <Text style={styles.floatingText}>Top Rated</Text>
      </View>

      {/* Bottom Details */}
      <View style={styles.bottomMain}>
        {/* Heading  */}
        <View>
          <Text style={styles.bottomHInActive}>Gourmet flavors,</Text>
          <Text style={styles.bottomHActive}>delivered to your door.,</Text>
          <Text style={styles.bottomText}>
            Experience the best local restaurants with ultra-fast delivery and
            premium service tailored for you.
          </Text>
        </View>

        {/* Navigation Dots */}
        <View style={styles.NDotsMain}>
          <View style={styles.NDotsActive}></View>
          <View style={styles.NDotsInActive}></View>
          <View style={styles.NDotsInActive}></View>
        </View>
      </View>

      {/* CTA Button*/}
      <View>
        <View style={styles.ctaMain}>
          {/* <Button style={styles.ctaButton} screen="HomeTabs">
            Next
          </Button> */}
          <Pressable style={styles.ctaButton} 
          onPress={() => navigation.navigate('HomeTabs')}
          >
            <Text style={styles.ctaText}>Next</Text>
            <FontAwesome style={styles.ctaIcon} name="arrow-right" />
          </Pressable>
        </View>

        {/* CTA Links */}
        <View style={styles.ctaLinkMain}>
          <Text style={styles.ctaLink}>Already have an account?</Text>
          <Text style={styles.ctaLinkActive}>Login</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    backgroundColor: Colors.light_white,
  },
  outerCircle: {
    borderRadius: 300,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.primary,
  },
  circle: {},
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    zIndex: 3,
  },
  floating: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    width: "30%",
    padding: 12,
    borderRadius: 24,
    textAlign: "center",
    gap: 6,
    transform: [{ translateX: -83 }, { translateY: -90 }],
  },
  floatingIcon: {
    marginTop: 3,
    paddingRight: 3,
  },
  floatingText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_500Medium,",
    fontWeight: 700,
  },
  bottomMain: {
    width: "80%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop : -32,
  },
  bottomHActive: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 900,
    fontFamily: "PlusJakartaSans_500Medium,",
    textAlign: "center",
    color: Colors.primary,
  },
  bottomHInActive: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 900,
    fontFamily: "PlusJakartaSans_500Medium,",
    textAlign: "center",
    color: Colors.black,
  },
  bottomText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.16,
    color: Colors.grey,
    textAlign: "center",
  },

  NDotsMain: {
    flexDirection: "row",
    marginTop: 30,
  },
  NDotsActive: {
    backgroundColor: Colors.primary,
    width: 30,
    height: 10,
    borderRadius: 999,
  },
  NDotsInActive: {
    backgroundColor: Colors.ligth_grey,
    opacity: 0.3,
    marginLeft: 3,
    width: 10,
    height: 10,
    borderRadius: 999,
  },
  ctaMain: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    width: "90%",
    borderRadius: 24,
    padding: 20,
    marginTop: 9,
  },
  ctaButton: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    width: "100%",
    color: Colors.white,
    fontSize: 35,
    justifyContent: "center",
  },
  ctaText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    fontFamily: "PlusJakartaSans_500Medium,",
    color: Colors.white,
  },
  ctaIcon: {
    justifyContent: "center",
    marginTop: 6,
    fontSize: 16,
    marginLeft: 12,
    color: Colors.white,
  },
  ctaLinkMain: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  ctaLink: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 500,
    fontFamily: "PlusJakartaSans_500Medium,",
    color: Colors.grey,
  },
  ctaLinkActive: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 500,
    fontFamily: "PlusJakartaSans_500Medium,",
    color: Colors.primary,
    marginLeft: 3,
  },
});
