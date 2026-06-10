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
import { FontAwesome } from "@expo/vector-icons";

export function Cart_Summary() {
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
      {/* Cart Items */}
      <View style={styles.cartItemsContainer}>
        {/* Heading & CTA */}
        <View style={styles.cartAction}>
          <Text style={styles.cartActionHeading}>Order Items (3)</Text>
          <Text style={styles.cartActionText}>clear all</Text>
        </View>

        {/* Added Products  */}
        <View style={styles.addedProductsMain}>
          {/* Product 1 */}
          <View style={styles.addedProducts}>
            {/* Left Product Image */}
            <View style={styles.leftProductsCard}>
              <Image
                style={styles.leftProductImg}
                source={require("@/assets/products/Momos.png")}
                alt="Momos"
              />
            </View>

            {/* Right Product Details */}
            <View style={styles.rightProductDetails}>
              {/* Details and Remove Icon */}
              <View style={styles.rightDetails}>
                <Text style={styles.rightText}>
                  Soft, delicately crafted dumplings filled with finely chopped
                  fresh...
                </Text>
                <FontAwesome style={styles.rightIcon} name="trash" />
              </View>

              {/* Price and Quantity */}
              <View style={styles.rightPriceQtyMain}>
                <Text style={styles.rightPrice}>₹120</Text>
                <View style={styles.rightQty}>
                  <FontAwesome style={styles.rightQtyIcon} name="minus" />
                  <Text style={styles.rightQtyText}>1</Text>
                  <FontAwesome style={styles.rightQtyIcon} name="plus" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Added Products  */}
        <View style={styles.addedProductsMain}>
          {/* Product 2 */}
          <View style={styles.addedProducts}>
            {/* Left Product Image */}
            <View style={styles.leftProductsCard}>
              <Image
                style={styles.leftProductImg}
                source={require("@/assets/products/Pizza.png")}
                alt="Pizza"
              />
            </View>

            {/* Right Product Details */}
            <View style={styles.rightProductDetails}>
              {/* Details and Remove Icon */}
              <View style={styles.rightDetails}>
                <Text style={styles.rightText}>
                  Crispy, golden-baked crust layered with rich tomato sauce,
                  melted cheese....
                </Text>
                <FontAwesome style={styles.rightIcon} name="trash" />
              </View>

              {/* Price and Quantity */}
              <View style={styles.rightPriceQtyMain}>
                <Text style={styles.rightPrice}>₹180</Text>
                <View style={styles.rightQty}>
                  <FontAwesome style={styles.rightQtyIcon} name="minus" />
                  <Text style={styles.rightQtyText}>1</Text>
                  <FontAwesome style={styles.rightQtyIcon} name="plus" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Added Products  */}
        <View style={styles.addedProductsMain}>
          {/* Product 3 */}
          <View style={styles.addedProducts}>
            {/* Left Product Image */}
            <View style={styles.leftProductsCard}>
              <Image
                style={styles.leftProductImg}
                source={require("@/assets/products/Paneer_Tikka_Wrap.png")}
                alt="Paneer Tikka"
              />
            </View>

            {/* Right Product Details */}
            <View style={styles.rightProductDetails}>
              {/* Details and Remove Icon */}
              <View style={styles.rightDetails}>
                <Text style={styles.rightText}>
                  Fresh paneer cubes coated in a spiced marinade and grilled
                  until offering a ....
                </Text>
                <FontAwesome style={styles.rightIcon} name="trash" />
              </View>

              {/* Price and Quantity */}
              <View style={styles.rightPriceQtyMain}>
                <Text style={styles.rightPrice}>₹120</Text>
                <View style={styles.rightQty}>
                  <FontAwesome style={styles.rightQtyIcon} name="minus" />
                  <Text style={styles.rightQtyText}>1</Text>
                  <FontAwesome style={styles.rightQtyIcon} name="plus" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.orderSummaryMain}>
        <Text style={styles.orderHeading}>Order Summary</Text>
        <Text style={styles.orderSubHeading}>Promo Code</Text>
        <View style={styles.summaryPromoCode}>
          <TextInput
            style={styles.summaryCoupon}
            placeholder="CHAI20"
            defaultValue="CHAI20"
            editable={false}
          />
          <Pressable style={styles.applyCoupon}>
            <Text style={styles.applyCouponText}>Apply</Text>
          </Pressable>
        </View>
        <View style={styles.promoSuccess}>
          <FontAwesome
            name="check"
            size={18}
            color={Colors.rating}
            style={styles.promoIcon}
          />
          <Text style={styles.promoText}>CHAI20 applied successfully</Text>
        </View>

        <View style={styles.orderDetailsMain}>
          <View style={styles.orderDetails}>
            {/* Left */}
            <View style={styles.orderDetailsLeft}>
              <Text style={styles.leftText}>Subtotal</Text>
              <Text style={styles.leftText}>Delivery Fee</Text>
              <Text style={styles.leftText}>Services Fee & Tax</Text>
              <Text style={styles.leftTextSuccess}>Discount(20%)</Text>
              <Text style={styles.leftTextTotal}>Total</Text>
            </View>

            {/* Right */}
            <View style={styles.orderDetailsRight}>
              <Text style={styles.leftText}>₹ 420.00</Text>
              <Text style={styles.leftTextSuccess}>Free</Text>
              <Text style={styles.leftText}>₹ 12.00</Text>
              <Text style={styles.leftTextSuccess}>49</Text>
              <Text style={styles.leftTextTotal}>₹ 383</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Public Notice */}
      <View style={styles.cartNotice}>
        <FontAwesome style={styles.cartNoticeIcon} name="leaf" />
        <Text style={styles.cartNoticeText}>
          By choosing standard delivery, you reduced carbon emissions by 1.2kg!
        </Text>
      </View>

      {/* Bottom Order Summary */}
      <View style={styles.bottomOrderTotal}>
        {/* Items */}
        <View style={styles.orderDetails}>
          {/* Left */}
          <View style={styles.orderDetailsLeft}>
            <Text style={styles.leftText}>Total amount</Text>
            <Text style={styles.leftText}>₹ 383</Text>
          </View>

          {/* Right */}
          <View style={styles.orderDetailsRight}>
            <Text style={styles.leftText}>Items</Text>
            <Text style={styles.leftTextSuccess}>3 Items</Text>
          </View>
        </View>
        <View style={styles.bottomPayment}>
          <Pressable style={styles.bottomCheckoutButton}>
            <Text style={styles.bottomCheckoutButtonText}>
              Proceed to Checkout
            </Text>
          </Pressable>
          <FontAwesome
            style={styles.bottomCheckoutButtonIcon}
            name="arrow-right"
          />
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
  cartItemsContainer: {
    // backgroundColor: "red",
    width: "100%",
    marginTop: 60,
  },
  cartAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green",
  },
  cartActionHeading: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.black,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "semibold",
  },
  cartActionText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "normal",
  },
  addedProductsMain: {
    marginTop: 18,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: "column",
    padding: 6,
  },
  addedProducts: {
    // backgroundColor: "pink",
    flexDirection: "row",
    padding: 6,
    borderRadius: 12,
  },
  leftProductsCard: {
    width: "40%",
    justifyContent: "center",
  },
  leftProductImg: {
    width: 96,
    height: 96,
    resizeMode: "cover",
    borderRadius: 12,
  },
  rightProductDetails: {
    width: "60%",
    flexDirection: "column",
  },
  rightDetails: {
    flexDirection: "row",
    width: "100%",
    // marginTop:12,
  },
  rightText: {
    width: "80%",
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.black,
    fontSize: 15,
    lineHeight: 16,
    fontWeight: "normal",
  },
  rightIcon: {
    width: "20%",
    fontSize: 21,
    marginTop: 12,
    marginLeft: 15,
  },
  rightPriceQtyMain: {
    // backgroundColor: Colors.primary,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rightPrice: {
    width: "50%",
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.black,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "semibold",
    verticalAlign: "middle",
    textAlign: "left",
  },
  rightQty: {
    width: "50%",
    backgroundColor: Colors.white_shade_button,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginTop: 3,
  },
  rightQtyIcon: {
    borderRadius: 30,
    width: 20,
    height: 20,
    color: Colors.primary,
    verticalAlign: "middle",
    textAlign: "left",
    marginTop: 3,
  },
  rightQtyText: {
    width: "50%",
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.black,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "semibold",
    verticalAlign: "middle",
    textAlign: "center",
    marginLeft: -6,
    marginRight: 3,
  },

  orderSummaryMain: {
    backgroundColor: Colors.white,
    width: "100%",
    borderRadius: 12,
    padding: 12,
    marginTop: 30,
  },
  orderHeading: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 20,
    lineHeight: 28,
    color: Colors.black,
    fontWeight: "semibold",
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 0.3,
    borderColor: Colors.ligth_grey + "30",
  },
  orderSubHeading: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.choco,
    fontWeight: "normal",
  },
  summaryPromoCode: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
    marginLeft: -3,
    gap: 6,
  },
  summaryCoupon: {
    width: "70%",
    backgroundColor: Colors.white_shade_minimal,
    borderRadius: 9,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  applyCoupon: {
    width: "28%",
    backgroundColor: Colors.white_shade_button,
    borderRadius: 9,
  },
  applyCouponText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.ligth_grey,
    marginTop: 9,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  promoSuccess: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 9,
    marginTop: 9,
  },
  promoIcon: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: Colors.rating,
    borderRadius: 18,
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    verticalAlign: "middle",
    paddingLeft: 2,
  },
  promoText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.rating,
    marginTop: 6,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },
  orderDetailsMain: {
    flexDirection: "row",
    marginTop: 21,
  },
  orderDetails: {
    width: "100%",
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderDetailsLeft: {},
  orderDetailsRight: {},
  leftText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.choco,
    marginTop: 6,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },
  leftTextSuccess: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.rating,
    marginTop: 6,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },

  leftTextTotal: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.choco,
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 24,
    textAlign: "left",
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    borderStyle: "dotted",
    paddingTop: 12,
  },
  cartNotice: {
    width: "100%",
    backgroundColor: Colors.rating_shade,
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.rating,
  },
  cartNoticeIcon: {
    color: Colors.rating,
    marginLeft: 12,
    marginRight: 12,
    fontSize: 17,
  },
  cartNoticeText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.choco,
    marginTop: 0,
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22,
    flex: 1,
    flexWrap: "wrap",
  },
  bottomOrderTotal: {
    width: "120%",
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    marginBottom: 30,
    paddingLeft: 42,
    paddingRight: 42,
  },
  bottomPayment: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 22,
    borderRadius: 90,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 12,
    marginBottom: 12,
  },
  bottomCheckoutButton: {},
  bottomCheckoutButtonText: {
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.white,
    marginTop: 16,
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 24,
  },
  bottomCheckoutButtonIcon: {
    color: Colors.white,
    marginTop: 18,
    marginLeft: 12,
    verticalAlign: "middle",
    fontSize: 16,
  },
});
