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
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export function Order_Tracking() {
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
      {/* Map Tracking */}
      <View style={styles.orderTrackingContainer}>
        <Image
          style={styles.orderImage}
          source={require("@/assets/Minimalist_Map_UI_Section.png")}
          alt="Location"
        />
      </View>

      <View style={styles.orderInformationContainer}>
        {/* Order Details */}
        <View style={styles.orderDetailsContainer}>
          {/* Profile Details */}
          <View style={styles.leftDetails}>
            <Image
              style={styles.userImage}
              source={require("@/assets/user_profile.png")}
              alt="User Profile"
            />
          </View>

          {/* Center Details */}
          <View style={styles.centerDetails}>
            <Text style={styles.centerDetailsHeading}>Rajesh Kumar</Text>
            <View style={styles.centerDetailsTextIcon}>
              <FontAwesome style={styles.centerDetailsIcon} name="star" />
              <Text style={styles.centerDetailsText}>4.9</Text>
              <FontAwesome style={styles.centerDetailsIconGrey} name="circle" />
              <Text style={styles.centerDetailsText}>Top Rated</Text>
            </View>
          </View>

          {/* Right Details */}
          <View style={styles.rightDetails}>
            <FontAwesome5 style={styles.rightDetailsIcon} name="comments" />
            <FontAwesome style={styles.rightDetailsIcon} name="phone" />
          </View>
        </View>

        {/* Order Status */}
        <View style={styles.orderStatusMain}>
          <View style={styles.dividerProgress}></View>
          <View style={styles.dividerProgressInactive}></View>
          <View style={styles.orderStatus}>
            <FontAwesome style={styles.orderStatusIcon} name="check" />
            <View style={styles.orderStatusDetails}>
              <Text style={styles.orderStatusHeading}>Order Received</Text>
              <Text style={styles.orderStatusText}>
                12:30 PM • We've got your order
              </Text>
            </View>
          </View>

          <View style={styles.orderStatus}>
            <FontAwesome5 style={styles.orderStatusIcon} name="utensils" />
            <View style={styles.orderStatusDetails}>
              <Text style={styles.orderStatusHeading}>Preparing</Text>
              <Text style={styles.orderStatusText}>
                12:35 PM • Chef is working magic
              </Text>
            </View>
          </View>

          <View style={styles.orderStatus}>
            <FontAwesome5
              style={styles.orderStatusIconActive}
              name="motorcycle"
            />
            <View style={styles.orderStatusDetails}>
              <Text style={styles.orderStatusHeading}>Out for Delivery</Text>
              <Text style={styles.orderStatusText}>
                In transit • Rajesh is 2km away
              </Text>
            </View>
          </View>

          <View style={styles.orderStatus}>
            <FontAwesome style={styles.orderStatusIconInActive} name="home" />
            <View style={styles.orderStatusDetails}>
              <Text style={styles.orderStatusHeading}>Delivered</Text>
              <Text style={styles.orderStatusText}>
                Estimated arrival 12:55 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottomCartMain}>
          <View style={styles.bottomCartDetails}>
            <Text style={styles.bottomCardHeading}>View Order Details</Text>
            <FontAwesome5 style={styles.bottomDownArrow} name="angle-down" />
          </View>
          <View style={styles.bottomChat}>
            <FontAwesome5 style={styles.chatIcon} name="headset" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: Colors.white_shade_minimal,
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  containerContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  orderTrackingContainer: {
    // backgroundColor: "red",
    width: "120%",
    marginTop: 60,
  },
  orderImage: {
    resizeMode: "cover",
    width: "97%",
  },
  orderInformationContainer: {
    backgroundColor: Colors.light_white + "120",
    width: "115%",
    borderRadius: 24,
    paddingLeft: "6%",
    paddingRight: "6%",
    marginTop: -18,
  },

  orderDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 12,
    backgroundColor: Colors.white,
    padding: 9,
    marginTop: 18,
  },
  leftDetails: {
    width: "20%",
  },
  userImage: {
    borderRadius: 300,
    width: 65,
    height: 65,
    resizeMode: "cover",
  },
  centerDetails: {
    // backgroundColor: "green",
    flexDirection: "column",
    justifyContent: "center",
    width: "45%",
    left: 3,
  },
  centerDetailsHeading: {
    // backgroundColor: "red",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "semibold",
  },
  centerDetailsTextIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerDetailsIcon: {
    fontSize: 13,
    color: Colors.primary,
    paddingRight: 6,
  },
  centerDetailsIconGrey: {
    fontSize: 8,
    color: Colors.grey,
    paddingRight: 6,
    paddingLeft: 6,
  },
  centerDetailsText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "semibold",
  },
  rightDetails: {
    // backgroundColor: Colors.grey,
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rightDetailsIcon: {
    width: 40,
    height: 40,
    fontSize: 20,
    color: Colors.primary,
    backgroundColor: Colors.white,
    borderRadius: 300,
    textAlign: "center",
    verticalAlign: "middle",
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  orderStatusMain: {
    // backgroundColor : 'green',
    marginTop: -120,
  },
  dividerProgress: {
    height: 150,
    width: 3,
    backgroundColor: Colors.primary,
    transform: [{ translateX: 15 }, { translateY: 185 }],
    marginBottom: -30,
  },
  dividerProgressInactive: {
    height: 60,
    width: 3,
    backgroundColor: Colors.grey + "70",
    transform: [{ translateX: 15 }, { translateY: 200 }],
    marginBottom: -30,
  },
  orderStatus: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginTop: 30,
  },
  orderStatusIcon: {
    fontSize: 15,
    height: 32,
    width: 32,
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 300,
    verticalAlign: "middle",
    textAlign: "center",
  },

  orderStatusIconActive: {
    fontSize: 15,
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: Colors.primary,
    color: Colors.primary,
    backgroundColor: Colors.white,
    borderRadius: 300,
    verticalAlign: "middle",
    textAlign: "center",
  },
  orderStatusIconInActive: {
    fontSize: 15,
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: Colors.grey + "70",
    color: Colors.grey + "70",
    backgroundColor: Colors.white,
    borderRadius: 300,
    verticalAlign: "middle",
    textAlign: "center",
  },
  orderStatusDetails: {
    // backgroundColor: "yellow",
    flexDirection: "column",
    marginLeft: 18,
  },
  orderStatusHeading: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "semibold",
  },
  orderStatusText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "semibold",
  },
  bottomCartMain: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey + "50",
    marginTop: 28,
  },
  bottomCartDetails: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  bottomCardHeading: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: 900,
    color: Colors.black,
  },
  bottomDownArrow: {
    fontSize: 12,
  },
  bottomChat: {
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 300,
    transform: [{ translateX: 250 }, { translateY: -90 }],
  },
  chatIcon: {
    fontSize: 32,
    color: Colors.white,
  },
});
