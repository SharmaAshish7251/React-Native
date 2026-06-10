import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import Colors from "../utils/Colors";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans/";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans/useFonts";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

export function Profile() {
  useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
  });

  return (
    <ScrollView
      style={styles.containerScroll}
      contentContainerStyle={styles.containerContent}
    >
      {/* User Profile */}
      <View style={styles.userProfileMain}>
        {/* Image with stats */}
        <View style={styles.userImageStats}>
          <Image
            style={styles.userImage}
            source={require("@/assets/user_profile.png")}
            alt="user profile"
          />
          <Text style={styles.userName}>Ashish Sharma</Text>
          <Text style={styles.userEmail}>info@ashishsharma.com</Text>

          {/* Points */}
          <View style={styles.userPoints}>
            {/* left */}
            <View style={styles.userPointsLeft}>
              <Text style={styles.userPointsLeftHeading}>Points</Text>
              <Text style={styles.userPointsLeftText}>1,240</Text>
            </View>
            {/* right */}
            <View style={styles.userPointsRight}>
              <Text style={styles.userPointsLeftHeading}>Tier</Text>
              <Text style={styles.userPointsRightText}>Gold</Text>
            </View>
          </View>

          {/* Quick Action Links */}
          <View style={styles.userQuickLinksMain}>
            {/* Links */}
            <View style={styles.userQuickLinkContainer}>
              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome5
                    style={styles.userQuicLeftIcon}
                    name="history"
                  />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Order History</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>

              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome6
                    style={styles.userQuicLeftIcon}
                    name="location-dot"
                  />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Saved Addresses</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>

              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome6
                    style={styles.userQuicLeftIcon}
                    name="credit-card"
                  />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Payment Methods</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>

              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome6
                    style={styles.userQuicLeftIcon}
                    name="receipt"
                  />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Promos & Credits</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>

              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome6
                    style={styles.userQuicLeftIcon}
                    name="headset"
                  />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Help Center</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>

              <Pressable style={styles.userQuickLink}>
                {/* Icon */}
                <View style={styles.userQuicLeftIconContainer}>
                  <FontAwesome6 style={styles.userQuicLeftIcon} name="gear" />
                </View>
                {/* Heading */}
                <View style={styles.userQuickHeadingContainer}>
                  <Text style={styles.userQuickHeading}>Settings</Text>
                </View>

                {/* Icon */}
                <View style={styles.userQuickRightIconContainer}>
                  <FontAwesome5
                    style={styles.userQuickRightIcon}
                    name="angle-right"
                  />
                </View>
              </Pressable>
            </View>

            <View style={styles.logoutButtonContainer}>
              <Pressable style={styles.logoutButton}>
                {/* Icon */}
                <View style={styles.logoutIconContainer}>
                  <FontAwesome6
                    style={styles.logoutIcon}
                    name="arrow-right-from-bracket"
                  />
                  <Text style={styles.logoutIconHeading}>
                    Logout from Account
                  </Text>
                </View>
              </Pressable>
            </View>

             <Text style={styles.appVersion}>App Version 2.4.0 (Build 502)</Text>

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
    paddingLeft: "0%",
    paddingRight: "0%",
  },
  containerContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  userProfileMain: {
    // backgroundColor: "red",
    width: "100%",
    marginTop: 60,
  },
  userImageStats: {
    flexDirection: "column",
    alignItems: "center",
  },
  userImage: {
    width: 96,
    height: 96,
    borderRadius: 300,
    borderWidth : 3,
    borderStyle : 'solid',
    borderColor : Colors.white_shade_minimal+ "150",
  },
  userName: {
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 15,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: "bold",
    color: Colors.black,
  },
  userEmail: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "semibold",
    color: Colors.choco,
    marginTop: -6,
  },
  userPoints: {
    // backgroundColor : Colors.white,
    flexDirection: "row",
    gap: 12,
    width: "100%",
    justifyContent: "center",
    marginTop: 12,
  },
  userPointsLeft: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    width: "40%",
    borderWidth: 1,
    borderColor: Colors.grey + "50",
  },
  userPointsLeftHeading: {
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "medium",
    color: Colors.choco,
    textTransform: "uppercase",
    textAlign: "center",
  },
  userPointsLeftText: {
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 6,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    letterSpacing: 1.9,
    textAlign: "center",
    color: Colors.primary,
  },
  userPointsRight: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    width: "40%",
    borderWidth: 1,
    borderColor: Colors.grey + "50",
  },
  userPointsRightText: {
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 6,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    letterSpacing: 1.9,
    textAlign: "center",
    color: Colors.rating,
  },
  userQuickLinksMain: {
    flexDirection: "column",
    width: "100%",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  userQuickLinkContainer: {
    marginTop: 13,
    marginBottom: 13,
    justifyContent: "center",
  },
  userQuickLink: {
    flexDirection: "row",
    width: "100%",
    // justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 12,
    marginTop: 9,
  },
  userQuicLeftIconContainer: {
    backgroundColor: Colors.silver_shade,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  userQuicLeftIcon: {},
  userQuickHeadingContainer: {
    justifyContent: "flex-start",
    width: "68%",
    paddingLeft: 3,
  },
  userQuickHeading: {
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 6,
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 700,
    letterSpacing: 1.9,
    color: Colors.black,
  },
  userQuickRightIconContainer: {
    width: "10%",
  },
  userQuickRightIcon: {
    width: 40,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
  },
  logoutButtonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  logoutButton: {
    // backgroundColor :'green',
    flexDirection: "row",
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderStyle: "dashed",
    padding: 9,
    justifyContent: "center",
  },
  logoutIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    fontSize: 18,
    color: Colors.primary,

  },
  logoutIconHeading: {
    fontFamily: "PlusJakartaSans_500Medium",
    padding: 6,
    marginLeft: 9,
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 700,
    letterSpacing: 1.9,
    color: Colors.primary,
  },

    appVersion: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "semibold",
    color: Colors.choco,
    marginTop: 6,
    marginBottom: 42,
    textAlign : 'center',
  },
});
