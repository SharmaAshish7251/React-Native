import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
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

export function Restaurant_Details() {
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

      {/* Menu Button */}
      <View style={styles.detailsContainer}>
        {/* Horizontal Scroll */}
        <ScrollView horizontal={true}>
          <Pressable style={styles.menuButtonActive}>
            <Text style={styles.menuButtonTextActive}>Appetizers</Text>
          </Pressable>
          <Pressable style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Main Course</Text>
          </Pressable>
          <Pressable style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Beverages</Text>
          </Pressable>
          <Pressable style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Desserts</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Menu Items  */}
      <View style={styles.productMain}>
        {/* Heading */}
        <Text style={styles.productHeading}>Signature Appetizers</Text>

        {/* Products */}
        <View>
          {/* Classic Veg Pizza */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Classic Veg Pizza</Text>
              <Text style={styles.productDetails}>
                Crispy crust topped with vegetables and rich melted cheese.
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹99</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Pizza.png")}
              />
            </View>
          </View>

          {/* Classic Veg Burger */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Classic Veg Burger</Text>
              <Text style={styles.productDetails}>
                Crispy vegetable patty layered with cheese lettuce and sauces
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹49</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Burger.png")}
              />
            </View>
          </View>

          {/* Indo Chinese Chowmein */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Indo Chinese Chowmein</Text>
              <Text style={styles.productDetails}>
                Stir fried noodles tossed with fresh vegetables and sauces
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹120</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Chowmein.png")}
              />
            </View>
          </View>

          {/* Crispy Potato Fries */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Crispy Potato Fries</Text>
              <Text style={styles.productDetails}>
                Golden fried potato strips seasoned lightly and served hot.
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹49</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Crispy_Potato_Fries.png")}
              />
            </View>
          </View>

          {/* Steamed Veg Momos */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Steamed Veg Momos</Text>
              <Text style={styles.productDetails}>
                Soft dumplings filled with vegetables served with spicy chutney.
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹59</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Momos.png")}
              />
            </View>
          </View>


          {/* Paneer Tikka Wrap */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Paneer Tikka Wrap</Text>
              <Text style={styles.productDetails}>
                Grilled paneer cubes wrapped with vegetables and flavorful
                sauces.
              </Text>
              <View style={styles.productPriceandButton}>
                <Text style={styles.productHeading}>₹249</Text>
                <Pressable style={styles.productAction}>
                  <FontAwesome style={styles.productActionIcon} name="plus" />
                </Pressable>
              </View>
            </View>

            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Paneer_Tikka_Wrap.png")}
              />
            </View>
          </View>

          {/* Veg Spring Rolls */}
          <View style={styles.productCard}>
            {/* Left */}
            <View style={styles.productLeftDetails}>
              <Text style={styles.productHeading}>Veg Spring Rolls</Text>
              <Text style={styles.productDetails}>
                Crispy rolls stuffed with vegetables and served with dip.
              </Text>
              <View style={styles.productPriceandButton}>
              <Text style={styles.productHeading}>₹39</Text>
              <Pressable style={styles.productAction}>
                <FontAwesome style={styles.productActionIcon} name="plus" />
              </Pressable>
            </View>
            </View>



            {/* Right */}
            <View style={styles.productRighttDetails}>
              <Image
                style={styles.productRightImage}
                source={require("@/assets/products/Veg_Spring_Rolls.png")}
              />
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
    fontFamily: "PlusJakartaSans_400Regular",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    textAlign: "center",
  },

  detailsContainer: {
    width: "100%",
    // backgroundColor: "red",
    marginTop : -30,
  },

  menuButton: {
    fontSize: 16,
    color: Colors.black,
    // backgroundColor: Colors.light_white,
    padding: 12,
    borderRadius: 32,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  menuButtonActive: {
    fontSize: 16,
    color: Colors.white,
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 32,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  menuButtonTextActive: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans_400Regular",
  },
  menuButtonText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans_400Regular",
  },
  productMain: {
    // backgroundColor: "blue",
    width: "100%",
    paddingVertical: 12,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    width: "100%",
    padding: 15,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 12,
  },
  productHeading: {
    fontSize: 20,
    color: Colors.choco,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans_400Regular",
  },
  productLeftDetails: {
    flexDirection: "column",
    width: "60%",
    marginRight: 6,
  },

  productDetails: {
    color: Colors.choco,
    fontFamily: "PlusJakartaSans_700Bold,",
    fontWeight: "semibold",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "left",
    marginBottom: 9,
    // backgroundColor : 'red',
  },
  productPriceandButton: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  productAction: {
    // marginTop: 35,
  },
  productActionIcon: {
    width: 45,
    height: 45,
    borderRadius: 300,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: Colors.primary,
    fontSize: 16,
    color: Colors.white,
  },
  productRighttDetails: {
    width: "40%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  productRightImage: {
    borderRadius: 12,
    width: 120,
    height: 120,
  },
});
