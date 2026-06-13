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

export function Home() {
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
      <View>
        <Text style={styles.title}>Chaicode Eats</Text>
      </View>

      {/* Search */}
      <View style={styles.searchMain}>
        <FontAwesome style={styles.searchPrefix} name="search" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for dishes or restaurants"
        />
        <FontAwesome style={styles.searchSuffix} name="sliders" />
      </View>

      {/* Category */}
      <View style={styles.categoryMain}>
        <Text style={styles.categoryHeading}>What's on your mind?</Text>
        {/* Icon with name */}
        <ScrollView horizontal={true} style={styles.categoryIconMain}>
          {/* pizza */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMainActive}>
              <Image
                style={styles.categoryIconActive}
                source={require("@/assets/category/pizza.png")}
              />
            </View>
            <Text style={styles.categoryText}>Pizza</Text>
          </View>

          {/* Burgers */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/burgers.png")}
              />
            </View>
            <Text style={styles.categoryText}>Burgers</Text>
          </View>

          {/* Sushi */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/sushi.png")}
              />
            </View>
            <Text style={styles.categoryText}>Sushi</Text>
          </View>

          {/* Healthy */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/healthy.png")}
              />
            </View>
            <Text style={styles.categoryText}>Healthy</Text>
          </View>

          {/* Dessert */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/dessert.png")}
              />
            </View>
            <Text style={styles.categoryText}>Dessert</Text>
          </View>
          {/* pizza */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMainActive}>
              <Image
                style={styles.categoryIconActive}
                source={require("@/assets/category/pizza.png")}
              />
            </View>
            <Text style={styles.categoryText}>Pizza</Text>
          </View>

          {/* Burgers */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/burgers.png")}
              />
            </View>
            <Text style={styles.categoryText}>Burgers</Text>
          </View>

          {/* Sushi */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/sushi.png")}
              />
            </View>
            <Text style={styles.categoryText}>Sushi</Text>
          </View>

          {/* Healthy */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/healthy.png")}
              />
            </View>
            <Text style={styles.categoryText}>Healthy</Text>
          </View>

          {/* Dessert */}
          <View style={styles.categoryIconTextContainer}>
            <View style={styles.IconMain}>
              <Image
                style={styles.categoryIcon}
                source={require("@/assets/category/dessert.png")}
              />
            </View>
            <Text style={styles.categoryText}>Dessert</Text>
          </View>
        </ScrollView>
      </View>

      {/* Featured Restaurants */}
      <View style={styles.featuredContainer}>
        {/* Heading */}
        <View style={styles.featuredHeadingMain}>
          <Text style={styles.featuredHeading}>Featured Restaurants</Text>
          <Text style={styles.featuredHText}>View all</Text>
        </View>

        {/* Cards 1*/}
        <View style={styles.cardsMain}>
          {/* Card Image */}
          <View style={styles.cardImageN}>
            <View>
              <Image
                style={styles.cardImg}
                source={require("@/assets/featured/Featured_food_dish.png")}
                alt="The Gourmet Bistro"
              />
            </View>
            <View style={styles.cardHighlight}>
              <View style={styles.cardHighlightTime}>
                <Text style={styles.cardHighlightTimeText}>20-30 min</Text>
              </View>

              <View style={styles.cardHighlightRating}>
                <FontAwesome
                  style={styles.cardHighlighratingIcon}
                  name="star"
                />
                <Text style={styles.cardHighlighratingText}>4.8</Text>
              </View>
            </View>
          </View>

          {/* Bottom Card */}
          <View style={styles.cardBottom}>
            <Text style={styles.bottomCardHeading}>The Gourmet Bistro</Text>
            <View style={styles.cardDetailPoints}>
              <Text style={styles.bottomCardText}>Italian</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Pasta</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Wine Bar</Text>
            </View>

            {/* Delivery info and prices */}
            <View style={styles.deliveryPriceMain}>
              <View style={styles.deliveryDays}>
                <FontAwesome style={styles.deliveryIcon} name="truck" />
                <Text style={styles.deliveryText}>Free Delivery</Text>
              </View>

              <View style={styles.deliveryPrice}>
                <FontAwesome style={styles.deliveryPriceIcon} name="money" />
                <Text style={styles.deliveryPriceText}>₹₹</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Cards 2*/}
        <View style={styles.cardsMain}>
          {/* Card Image */}
          <View style={styles.cardImageN}>
            <View>
              <Image
                style={styles.cardImg}
                source={require("@/assets/featured/Japanese_cuisine.png")}
                alt="Sakura Zen Sushi"
              />
            </View>
            <View style={styles.cardHighlight}>
              <View style={styles.cardHighlightTime}>
                <Text style={styles.cardHighlightTimeText}>25-35 min</Text>
              </View>

              <View style={styles.cardHighlightRating}>
                <FontAwesome
                  style={styles.cardHighlighratingIcon}
                  name="star"
                />
                <Text style={styles.cardHighlighratingText}>4.6</Text>
              </View>
            </View>
          </View>

          {/* Bottom Card */}
          <View style={styles.cardBottom}>
            <Text style={styles.bottomCardHeading}>The Gourmet Bistro</Text>
            <View style={styles.cardDetailPoints}>
              <Text style={styles.bottomCardText}>Japenese</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Sushi</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Teppanyaki</Text>
            </View>

            {/* Delivery info and prices */}
            <View style={styles.deliveryPriceMain}>
              <View style={styles.deliveryDays}>
                <FontAwesome style={styles.deliveryIcon} name="truck" />
                <Text style={styles.deliveryText}>₹99 Delivery</Text>
              </View>

              <View style={styles.deliveryPrice}>
                <FontAwesome style={styles.deliveryPriceIcon} name="money" />
                <Text style={styles.deliveryPriceText}>₹₹₹</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Cards 3*/}
        <View style={styles.cardsMain}>
          {/* Card Image */}
          <View style={styles.cardImageN}>
            <View>
              <Image
                style={styles.cardImg}
                source={require("@/assets/featured/Royal_India_Bistro.png")}
                alt="Royal India Bistro"
              />
            </View>
            <View style={styles.cardHighlight}>
              <View style={styles.cardHighlightTime}>
                <Text style={styles.cardHighlightTimeText}>25-35 min</Text>
              </View>

              <View style={styles.cardHighlightRating}>
                <FontAwesome
                  style={styles.cardHighlighratingIcon}
                  name="star"
                />
                <Text style={styles.cardHighlighratingText}>4.8</Text>
              </View>
            </View>
          </View>

          {/* Bottom Card */}
          <View style={styles.cardBottom}>
            <Text style={styles.bottomCardHeading}>The Gourmet Bistro</Text>
            <View style={styles.cardDetailPoints}>
              <Text style={styles.bottomCardText}>North Indian</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Mughlai</Text>
              <FontAwesome style={styles.bottomIcon} name="circle" />
              <Text style={styles.bottomCardText}>Desi</Text>
            </View>

            {/* Delivery info and prices */}
            <View style={styles.deliveryPriceMain}>
              <View style={styles.deliveryDays}>
                <FontAwesome style={styles.deliveryIcon} name="truck" />
                <Text style={styles.deliveryText}>₹99 Delivery</Text>
              </View>

              <View style={styles.deliveryPrice}>
                <FontAwesome style={styles.deliveryPriceIcon} name="money" />
                <Text style={styles.deliveryPriceText}>₹₹₹</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Popular Near You */}
      <View style={styles.popularMain}>
        <Text style={styles.popularHeading}>Popular Near You</Text>

        {/* 1st Row Cards */}
        <View style={styles.popularRow}>
          {/* Left Cards */}
          <View style={styles.popularLeftCard}>
            {/* Image */}
            <View>
              <Image
                style={styles.leftImage}
                source={require("@/assets/popular/Juicy_burger.png")}
              />
              <View>
                <FontAwesome style={styles.leftIcon} name="plus" />
              </View>
              <View style={styles.leftDetails}>
                <Text style={styles.leftHeading}>Classic Burger</Text>
                <Text style={styles.leftPrice}>₹49</Text>
              </View>
            </View>
          </View>

          {/* Right Cards */}
          <View style={styles.popularRightCard}>
            {/* Image */}
            <View>
              <Image
                style={styles.rightImage}
                source={require("@/assets/popular/Hot_pizza.png")}
              />
              <View>
                <FontAwesome style={styles.rightIcon} name="plus" />
              </View>
              <View style={styles.rightDetails}>
                <Text style={styles.rightHeading}>Spicy Pepperoni</Text>
                <Text style={styles.rightPrice}>₹149</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 2nd Row Cards */}
        <View style={styles.popularRow}>
          {/* Left Cards */}
          <View style={styles.popularLeftCard}>
            {/* Image */}
            <View>
              <Image
                style={styles.leftImage}
                source={require("@/assets/popular/Salad_bowl.png")}
              />
              <View>
                <FontAwesome style={styles.leftIcon} name="plus" />
              </View>
              <View style={styles.leftDetails}>
                <Text style={styles.leftHeading}>Harvest Power Bowl</Text>
                <Text style={styles.leftPrice}>₹99</Text>
              </View>
            </View>
          </View>

          {/* Right Cards */}
          <View style={styles.popularRightCard}>
            {/* Image */}
            <View>
              <Image
                style={styles.rightImage}
                source={require("@/assets/popular/Biryani.png")}
              />
              <View>
                <FontAwesome style={styles.rightIcon} name="plus" />
              </View>
              <View style={styles.rightDetails}>
                <Text style={styles.rightHeading}>Biryani</Text>
                <Text style={styles.rightPrice}>₹149</Text>
              </View>
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
  title : {
marginTop: 62,
   fontSize: 42,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 42,
    color: Colors.black,
    textAlign: "left",
  },
  searchMain: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
    padding: 9,
  },
  searchPrefix: {
    width: "10%",
    textAlign: "center",
    fontSize: 18,
    color: Colors.grey,
  },
  searchInput: {
    width: "80%",
    textAlign: "left",
    fontSize: 16,
    color: Colors.grey,
    marginTop: 3,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  searchSuffix: {
    width: "10%",
    textAlign: "center",
    fontSize: 18,
    color: Colors.primary,
  },
  categoryMain: {
    width: "100%",
  },
  categoryHeading: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 28,
    color: Colors.black,
  },
  categoryIconMain: {
    flexDirection: "row",
    // backgroundColor: "pink",
    marginTop: 12,
  },
  IconMain: {
    width: 60,
    height: 60,
    backgroundColor: Colors.silver_shade,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  IconMainActive: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIconTextContainer: {
    marginRight: 6,
  },

  categoryIcon: {
    width: 24,
    height: 24,
    padding: 12,
    tintColor: Colors.choco,
    resizeMode: "cover",
  },
  categoryIconActive: {
    tintColor: Colors.white,
  },

  categoryText: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: Colors.black,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 600,
    letterSpacing: 0.7,
    textAlign: "center",
    marginTop: 12,
  },

  featuredContainer: {
    width: "100%",
    marginTop: 12,
  },
  featuredHeadingMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuredHeading: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 28,
    color: Colors.black,
  },
  featuredHText: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: Colors.primary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
    letterSpacing: 0.7,
    textAlign: "center",
  },
  cardsMain: {
    marginTop: 12,
  },
  cardImageN: {
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  cardImg: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardHighlight: {
    backgroundColor: "green",
    height: 0,
  },
  cardHighlightTime: {
    width: "32%",
    height: 35,
    transform: [{ translateX: 10 }, { translateY: -39 }],
  },
  cardHighlightTimeText: {
    color: Colors.white,
    fontFamily: "PlusJakartaSans_500Medium,",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: Colors.primary,
    padding: 9,
    borderRadius: 300,
    textAlign: "center",
  },
  cardHighlightRating: {
    width: "22%",
    height: 35,
    transform: [{ translateX: 235 }, { translateY: -225 }],
    flexDirection: "row",
    padding: 9,
    borderRadius: 9,
    gap: 9,
    opacity: 0.9,
    backgroundColor: Colors.white,
  },
  cardHighlighratingIcon: {
    color: Colors.primary,
    fontSize: 14,
  },
  cardHighlighratingText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_500Medium,",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  cardBottom: {
    padding: 15,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    backgroundColor: Colors.white,
  },
  bottomCardHeading: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 28,
    color: Colors.black,
    marginTop: 3,
    marginBottom: 6,
  },
  bottomCardText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans_500Medium,",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
  },
  cardDetailPoints: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  bottomIcon: {
    fontSize: 6,
    color: Colors.grey,
  },
  deliveryPriceMain: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 24,
  },
  deliveryDays: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 9,
  },
  deliveryIcon: {
    fontSize: 12,
    tintColor: Colors.choco,
    marginTop: 3,
    transform: [{ scaleX: -1 }],
  },
  deliveryText: {
    marginTop: 3,
    fontSize: 12,
    color: Colors.choco,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  deliveryPrice: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 6,
  },
  deliveryPriceIcon: {
    fontSize: 12,
    tintColor: Colors.choco,
    marginTop: 13,
  },
  deliveryPriceText: {
    fontSize: 12,
    color: Colors.choco,
    marginTop: 13,
  },

  popularMain: {
    marginTop: 32,
    // backgroundColor: "pink",
    width: "100%",
  },
  popularHeading: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 28,
    color: Colors.black,
    textAlign: "left",
  },
  popularRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  popularLeftCard: {
    // backgroundColor: Colors.white,
    borderRadius: 12,
    width: "48%",
  },
  leftImage: {
    borderRadius: 12,
    resizeMode: "cover",
    width: "100%",
  },
  leftIcon: {
    backgroundColor: Colors.white,
    width: 30,
    height: 30,
    transform: [{ translateX: 115 }, { translateY: -38 }],
    borderRadius: 30,
    textAlign: "center",
    verticalAlign: "middle",
    color: Colors.primary,
  },
  leftDetails: {
    // backgroundColor: Colors.grey,
  },
  leftHeading: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 20,
    color: Colors.black,
    textAlign: "left",
    marginTop: -15,
  },
  leftPrice: {
    marginTop: 9,
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 16,
    color: Colors.primary,
    textAlign: "left",
  },

  popularRightCard: {
    // backgroundColor: Colors.white,
    borderRadius: 12,
    width: "48%",
  },
  rightImage: {
    borderRadius: 12,
    resizeMode: "cover",
    width: "100%",
  },
  rightIcon: {
    backgroundColor: Colors.white,
    width: 30,
    height: 30,
    transform: [{ translateX: 115 }, { translateY: -38 }],
    borderRadius: 30,
    textAlign: "center",
    verticalAlign: "middle",
    color: Colors.primary,
  },
  rightDetails: {
    // backgroundColor: Colors.grey,
  },
  rightHeading: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 20,
    color: Colors.black,
    textAlign: "left",
    marginTop: -12,
  },
  rightPrice: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
    fontWeight: "700",
    lineHeight: 16,
    color: Colors.primary,
    textAlign: "left",
  },
});
