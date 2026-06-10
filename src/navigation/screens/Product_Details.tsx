import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import Colors from "../utils/Colors";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans/";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans/useFonts";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export function Product_Details() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
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
          source={require("@/assets/momos_hero.png")}
        />
      </View>

      {/* Product Infomation */}
      <View style={styles.productInfoMain}>
        <View style={styles.productInfo}>
          <Text style={styles.productHeading}>Steamed Veg Momos</Text>

          {/* Rating & Time */}
          <View style={styles.productRating}>
            <View style={styles.productRatingIconText}>
              <FontAwesome style={styles.productRatingIcon} name="star" />
              <Text style={styles.productInfoTextActive}>4.9</Text>
              <Text style={styles.productInfoTextSub}>(1.2K+ Reviews) </Text>
              <View style={styles.productDelivery}>
                <FontAwesome style={styles.deliveryIcon} name="motorcycle" />
                <Text style={styles.productInfoText}>25-35 Min</Text>
              </View>
            </View>
          </View>

          {/* stats info */}
          <View style={styles.productStatsMain}>
            {/* Price */}
            <View style={styles.productPriceMain}>
              <Text style={styles.productPriceText}>₹199</Text>
            </View>
          </View>

          {/* Product Details */}
          <View style={styles.productDetailsMain}>
            {/* Heading */}
            <Text style={styles.productDetailsH}>About this dish</Text>
            {/*Description */}
            <Text style={styles.productDetailsP}>
              Soft, delicately crafted dumplings filled with finely chopped
              fresh vegetables and aromatic spices. Expertly steamed to retain
              their natural flavors and nutrients, these momos are served hot
              with a rich, spicy chutney that enhances every bite. A perfect
              balance of taste, texture, and authenticity for a satisfying snack
              or light meal.
            </Text>
          </View>

          {/* Enhance Your Meal */}
          <View style={styles.enhanceMain}>
            {/* Heading and Optional */}
            <View style={styles.enhanceOptional}>
              <Text style={styles.enhanceOptionalHeading}>
                Enhance your meal
              </Text>
              <Pressable style={styles.enhanceOptionalButton}>
                <Text style={styles.enhanceOptionalButtonText}>Optional</Text>
              </Pressable>
            </View>

            {/* options */}
            <View style={styles.enhanceOptions}>
              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>
                  Extra Spicy Chutney
                </Text>
                <Text style={styles.enhanceCheckboxPrice}>₹6.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>Cheese Stuffing</Text>
                <Text style={styles.enhanceCheckboxPrice}>₹4.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>
                  Butter Tossed Momos
                </Text>
                <Text style={styles.enhanceCheckboxPrice}>₹12.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>
                  Crispy Fried Upgrade
                </Text>
                <Text style={styles.enhanceCheckboxPrice}>₹19.99</Text>
              </View>
            </View>
          </View>

          {/* Prefences Your Meal */}
          <View style={styles.enhanceMain}>
            {/* Heading and Optional */}
            <View style={styles.enhanceOptional}>
              <Text style={styles.enhanceOptionalHeading}>Preferences</Text>
              <Pressable style={styles.enhancePrefencesButtonActive}>
                <Text style={styles.enhancePrefencesButtonActiveText}>
                  Required
                </Text>
              </Pressable>
            </View>

            {/* options */}
            <View style={styles.enhanceOptions}>
              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>
                  Steamed Momos (Standard)
                </Text>
                <Text style={styles.enhanceCheckboxPrice}>₹20.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>Fried Momos</Text>
                <Text style={styles.enhanceCheckboxPrice}>₹30.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>Tandoori Momos</Text>
                <Text style={styles.enhanceCheckboxPrice}>₹62.99</Text>
              </View>

              <View style={styles.enhanceOptionsCheckbox}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  style={styles.enhanceCheckbox}
                  color={checked ? Colors.primary : undefined}
                />
                <Text style={styles.enhanceCheckboxText}>Pan-Fried Momos</Text>
                <Text style={styles.enhanceCheckboxPrice}>₹39.99</Text>
              </View>
            </View>
          </View>

          {/* Special Instructions */}
          <View style={styles.enhanceMain}>
            {/* Heading and Optional */}
            <View style={styles.enhanceOptional}>
              <Text style={styles.enhanceOptionalHeading}>
                Special Instructions
              </Text>
            </View>
            <View style={styles.specialInstruction}>
              <TextInput
                style={styles.specialInstructionArea}
                placeholder="Any allergies? No onions? Let us know..."
              ></TextInput>
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
  productInfoMain: {
    // backgroundColor: "red",
    width: "100%",
  },
  productInfo: {
    backgroundColor: Colors.white,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 15,
    transform: [{ translateX: 0 }, { translateY: -59 }],
  },
  productHeading: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "left",
    marginBottom: 3,
  },

  productRating: {
    flex: 1,
  },
  productRatingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },

  productRatingIcon: {
    fontSize: 16,
    color: Colors.rating,
  },

  productInfoTextActive: {
    color: Colors.rating,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },
  productInfoTextSub: {
    color: Colors.rating,
    fontFamily: "PlusJakartaSans_400Regular",
    fontWeight: "normal",
    textTransform: "lowercase",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    textAlign: "center",
  },

  productDelivery: {
    width: "40%",
    flexDirection: "row",
    flex: 1,
    gap: 3,
    // backgroundColor: "red",
    alignItems: "center",
  },

  deliveryIcon: {
    fontSize: 16,
    color: Colors.grey,
    marginLeft: 12,
  },

  productInfoText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },

  productStatsMain: {
    flexDirection: "row",
    alignContent: "space-between",
    padding: 12,
    width: "100%",
    borderRadius: 12,
    marginTop: 12,
  },

  productPriceMain: {
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "red",
  },
  productPriceText: {
    color: Colors.primary,
    fontFamily: "PlusJakartaSans_700Bold",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 44,
    // textAlign: "left",
    marginLeft: -12,
  },
  productDetailsMain: {
    // backgroundColor : 'red',
  },
  productDetailsH: {
    color: Colors.grey,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1.4,
    textAlign: "left",
    textTransform: "uppercase",
    marginBottom: 9,
  },
  productDetailsP: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1.4,
    textAlign: "left",
    fontWeight: "500",
  },
  enhanceMain: {
    flexDirection: "column",
    // backgroundColor: "red",
    marginTop: 30,
  },
  enhanceOptional: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  enhanceOptionalHeading: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: Colors.black,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "500",
    marginTop: 4,
  },
  enhanceOptionalButton: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: Colors.white_shade_button,
    borderRadius: 30,
  },
  enhanceOptionalButtonText: {
    color: Colors.black,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  enhanceOptions: {
    flexDirection: "column",
    // backgroundColor : 'yellow',
  },
  enhanceOptionsCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    marginTop: 15,
  },
  enhanceCheckbox: {
    // color : Colors.black,
    borderColor: Colors.choco,
    borderWidth: 2,
    marginTop: 3,
  },
  enhanceCheckboxText: {
    color: Colors.black,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "600",
    textAlign: "left",
    // backgroundColor: "red",
    width: "70%",
    marginLeft: "3%",
  },
  enhanceCheckboxPrice: {
    color: Colors.black,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "600",
    letterSpacing: 0.7,
    marginTop: 2,
  },
  enhancePrefencesButtonActive: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: Colors.primary_shade,
    borderRadius: 30,
  },
  enhancePrefencesButtonActiveText: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  specialInstruction: {
    backgroundColor: Colors.white_shade_minimal,
    padding: 12,
    height: 120,
    borderRadius: 12,
  },
  specialInstructionArea: {
    color: Colors.black,
  },
});
