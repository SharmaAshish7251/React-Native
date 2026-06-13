import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View, TextInput, Image } from "react-native";
import Colors from "../utils/Colors";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans/";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans/useFonts";
import { FontAwesome } from "@expo/vector-icons";

export function Profile() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
  });

  return (
    <ScrollView
      style={styles.containerScroll}
      contentContainerStyle={styles.containerContent}
    >
      {/* Top Hero Image */}
      <View>
        <Image
          style={styles.mainHeroImg}
          source={require("@/assets/Restaurant_Signature_Dish.png")}
        />
      </View>

      {/* Mini Infomation */}
      <View style={styles.miniInfoMain}>
        <View style={styles.miniInfo}>
          <Text style={styles.miniHeading}>The Artisan Hearth</Text>
          <View style={styles.miniDetailPoints}>
            <Text style={styles.miniPoint}>Gourmet</Text>
            <FontAwesome style={styles.miniIcon} name="circle" />
            <Text style={styles.miniPoint}>Wood-fired Pizza</Text>
            <FontAwesome style={styles.miniIcon} name="circle" />
            <Text style={styles.miniPoint}>Fine</Text>
          </View>
          <Text style={styles.miniPoint}>Dining</Text>

          {/* stats info */}
          <View style={styles.miniStatsMain}>
            {/* Rating */}
            <View style={styles.miniRating}>
              <View style={styles.miniRatingIconText}>
                <FontAwesome style={styles.miniRatingIcon} name="star" />
                <Text style={styles.miniInfoTextActive}>4.9</Text>
              </View>
              <Text style={styles.miniInfoTextSub}>2K+ Reviews </Text>
            </View>

            {/* Time */}
            <View style={styles.miniTimeMain}>
              <Text style={styles.miniInfoText}>25-35</Text>
              <Text style={styles.miniInfoTextSub}>Mins</Text>
            </View>

            {/* Price */}
            <View style={styles.miniPriceMain}>
              <Text style={styles.miniInfoText}>₹199</Text>
              <Text style={styles.miniInfoTextSub}>Price</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: Colors.light_white,
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  containerContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  mainHeroImg: {
    // width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  miniInfoMain: {
    // backgroundColor: "red",
    width: "100%",
  },
  miniInfo: {
    backgroundColor: Colors.white,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 15,
    transform: [{ translateX: 0 }, { translateY: -59 }],
  },
  miniHeading: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "left",
    marginBottom: 3,
  },
  miniDetailPoints: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    width: "90%",
  },
  miniPoint: {
    color: Colors.choco,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "semibold",
    fontSize: 18,
    lineHeight: 28,
    textAlign: "left",
    marginBottom: 0,
    // backgroundColor : 'red',
  },

  miniIcon: {
    fontSize: 9,
    color: Colors.grey,
  },
  miniStatsMain: {
    flexDirection: "row",
    backgroundColor: Colors.white_shade_minimal,
    alignContent: "space-between",
    padding: 12,
    width: "100%",
    borderRadius: 12,
    marginTop: 12,
  },
  miniTimeMain: {
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "red",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.primary + "40", // to give opacity
  },
  miniPriceMain: {
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "red",
  },
  miniRating: {
    flex: 1,
  },
  miniRatingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  miniRatingIcon: {
    fontSize: 16,
    color: Colors.primary,
  },
  miniInfoTextActive: {
    color: Colors.primary,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },
  miniInfoText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },
  miniInfoTextSub: {
    color: Colors.choco,
    fontFamily: "PlusJakartaSans_400Regular,",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
