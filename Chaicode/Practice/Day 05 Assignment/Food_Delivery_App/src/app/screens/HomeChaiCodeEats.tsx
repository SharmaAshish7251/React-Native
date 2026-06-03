import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { FontAwesome } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Colors from "../utils/Colors";
// import data from "../utils/category_items";

const HomeChaiCodeEats = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });
  return (
    // Main Container
    <ScrollView
      style={{ flex: 1, width: "100%" }}
      contentContainerStyle={styles.main}
    >
      {/* Search */}
      <View style={styles.search}>
        <View style={styles.searchPrefix}>
          <FontAwesome name="search" size={15} color={Colors.grey_bg} />
        </View>
        <TextInput
          style={styles.searchText}
          placeholder="Search for dishes or restaurants"
        />
        <View style={styles.searchSuffix}>
          <FontAwesome
            name="sliders"
            size={15}
            color={Colors.heading_dark_text}
          />
        </View>
      </View>

      {/* Category */}
      <View style={styles.category}>
        {/* Heading */}

        <Text style={styles.categoryH1}>Whats's on your mind?</Text>
        {/* Category Buttons */}
        <View style={styles.categoryContainer}>
          <Pressable>
            <View style={styles.categoryimg}>
              <Image source={require("@/assets/icon/category/pizza.png")} />
            </View>
            <Text style={styles.categoryTextActive}>Pizza</Text>
          </Pressable>

          <Pressable>
            <View style={styles.categoryimgInactive}>
              <Image
                source={require("@/assets/icon/category/burgers.png")}
                tintColor={Colors.heading_brown_text}
              />
            </View>
            <Text style={styles.categorytextInactive}>Burgers</Text>
          </Pressable>
          <Pressable>
            <View style={styles.categoryimgInactive}>
              <Image
                source={require("@/assets/icon/category/sushi.png")}
                tintColor={Colors.heading_brown_text}
              />
            </View>
            <Text style={styles.categorytextInactive}>Sushi</Text>
          </Pressable>
          <Pressable>
            <View style={styles.categoryimgInactive}>
              <Image
                source={require("@/assets/icon/category/healthy.png")}
                tintColor={Colors.heading_brown_text}
              />
            </View>
            <Text style={styles.categorytextInactive}>Health</Text>
          </Pressable>
        </View>
      </View>

      {/* Featured Restaurants */}
      <View style={styles.featuredMain}>
        {/* Featured Title */}
        <View style={styles.featuredHeading}>
          <Text style={styles.categoryH1}>Featured Restaurants</Text>
          <Text style={styles.featuredLink}>View all</Text>
        </View>

        {/* Featured Card */}
        <View style={styles.featuredCard}>
          {/* Image  */}
          <View style={styles.featuredImg}>
            <Image
              source={require("@/assets/images/featured_res/The_Gourmet_Bistro.png")}
              alt="The Gourmet Bistro"
              resizeMode="cover"
              style={{ width: "100%", height: 180 }}
            />
          </View>

          <View style={styles.featuredBottom}>
            <Text style={styles.categoryH1}>The Gourmet Bistro</Text>
            {/* Highlight */}
            <View style={styles.categoryHighlight}>
              <Text style={styles.categoryHText}>Italian</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                size={9}
                color={Colors.grey_bg}
              />
              <Text style={styles.categoryHText}>Pasta</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                color={Colors.grey_bg}
                size={9}
              />
              <Text style={styles.categoryHText}>Wine Bar</Text>
            </View>

            {/* Service& Cost */}
            <View style={styles.servicesMain}>
              {/* Delivery */}
              <View style={styles.servicesDelivery}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="truck"
                  size={16}
                />
                <Text style={styles.deliveryText}>Free Delivery</Text>
              </View>

              {/* Cost */}
              <View style={[styles.servicesDelivery, styles.deliveryGap]}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="money"
                  size={16}
                />
                <Text style={styles.deliveryText}>₹₹</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 2nd Featured Card */}
        <View style={styles.featuredCard}>
          {/* Image  */}
          <View style={styles.featuredImg}>
            <Image
              source={require("@/assets/images/featured_res/Japanese_cuisine.png")}
              alt="The Gourmet Bistro"
              resizeMode="cover"
              style={{ width: "100%", height: 180 }}
            />
          </View>

          <View style={styles.featuredBottom}>
            <Text style={styles.categoryH1}>Sakura Zen Sushi</Text>
            {/* Highlight */}
            <View style={styles.categoryHighlight}>
              <Text style={styles.categoryHText}>Japanese</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                size={9}
                color={Colors.grey_bg}
              />
              <Text style={styles.categoryHText}>Sushi</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                color={Colors.grey_bg}
                size={9}
              />
              <Text style={styles.categoryHText}>Teppanyakix</Text>
            </View>

            {/* Service& Cost */}
            <View style={styles.servicesMain}>
              {/* Delivery */}
              <View style={styles.servicesDelivery}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="truck"
                  size={16}
                />
                <Text style={styles.deliveryText}>₹299 Delivery</Text>
              </View>

              {/* Cost */}
              <View style={[styles.servicesDelivery, styles.deliveryGap]}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="money"
                  size={16}
                />
                <Text style={styles.deliveryText}>₹₹₹</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 3rd Featured Card */}
        <View style={styles.featuredCard}>
          {/* Image  */}
          <View style={styles.featuredImg}>
            <Image
              source={require("@/assets/images/featured_res/Royal_India_Bistro.png")}
              alt="The Gourmet Bistro"
              resizeMode="cover"
              style={{ width: "100%", height: 180 }}
            />
          </View>

          <View style={styles.featuredBottom}>
            <Text style={styles.categoryH1}>Royal India Bistro</Text>
            {/* Highlight */}
            <View style={styles.categoryHighlight}>
              <Text style={styles.categoryHText}>North Indian</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                size={9}
                color={Colors.grey_bg}
              />
              <Text style={styles.categoryHText}>Mughlai</Text>
              <FontAwesome
                style={styles.categoryHIcon}
                name="circle"
                color={Colors.grey_bg}
                size={9}
              />
              <Text style={styles.categoryHText}>Non-Veg</Text>
            </View>

            {/* Service& Cost */}
            <View style={styles.servicesMain}>
              {/* Delivery */}
              <View style={styles.servicesDelivery}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="truck"
                  size={16}
                />
                <Text style={styles.deliveryText}>Free Delivery</Text>
              </View>

              {/* Cost */}
              <View style={[styles.servicesDelivery, styles.deliveryGap]}>
                <FontAwesome
                  style={styles.deliverIcon}
                  name="money"
                  size={16}
                />
                <Text style={styles.deliveryText}>₹₹₹</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Popular Near You */}
        <View style={styles.popularMain}>
          <View style={styles.featuredHeading}>
            <Text style={styles.categoryH1}>Popular New You</Text>
          </View>

          {/*  2 Cards */}
          <View style={styles.popularCardMain}>
            {/* Left Card */}
            <View style={styles.singlecard}>
              {/* Image */}
              <View>
                <Image
                  style={styles.popularImg}
                  source={require("@/assets/images/popular/Juicy_burger.png")}
                />
                <View style={styles.popularIcon}>
                  <FontAwesome
                    name="plus"
                    color={Colors.heading_dark_text}
                    size={12}
                  />
                </View>
              </View>
              {/* Bottom */}
              <View style={styles.popularBottom}>
                <Text style={styles.popularBottomText}>Cheesy Burger</Text>
                <Text style={styles.popularLink}>₹58.50</Text>
              </View>
            </View>
            {/* End Left Card */}

            {/* Right Card */}
            <View style={styles.singlecard}>
              {/* Image */}
              <View>
                <Image
                  style={styles.popularImg}
                  source={require("@/assets/images/popular/Spicy_Pepperoni.png")}
                />
                <View style={styles.popularIcon}>
                  <FontAwesome
                    name="plus"
                    color={Colors.heading_dark_text}
                    size={12}
                  />
                </View>
              </View>
              {/* Bottom */}
              <View style={styles.popularBottom}>
                <Text style={styles.popularBottomText}>Spicy Pepperoni</Text>
                <Text style={styles.popularLink}>₹258.50</Text>
              </View>
            </View>
            {/* End Right Card */}
          </View>

          {/* 2nd Row Cards */}
          {/*  2 Cards */}
          <View style={styles.popularCardMain}>
            {/* Left Card */}
            <View style={styles.singlecard}>
              {/* Image */}
              <View>
                <Image
                  style={styles.popularImg}
                  source={require("@/assets/images/popular/Harvest_Power_Bowl.png")}
                />
                <View style={styles.popularIcon}>
                  <FontAwesome
                    name="plus"
                    color={Colors.heading_dark_text}
                    size={12}
                  />
                </View>
              </View>
              {/* Bottom */}
              <View style={styles.popularBottom}>
                <Text style={styles.popularBottomText}>Harvest Power Bowl</Text>
                <Text style={styles.popularLink}>₹158.50</Text>
              </View>
            </View>
            {/* End Left Card */}

            {/* Right Card */}
            <View style={styles.singlecard}>
              {/* Image */}
              <View>
                <Image
                  style={styles.popularImg}
                  source={require("@/assets/images/popular/Biryani.png")}
                />
                <View style={styles.popularIcon}>
                  <FontAwesome
                    name="plus"
                    color={Colors.heading_dark_text}
                    size={12}
                  />
                </View>
              </View>
              {/* Bottom */}
              <View style={styles.popularBottom}>
                <Text style={styles.popularBottomText}>Biryani</Text>
                <Text style={styles.popularLink}>₹158.50</Text>
              </View>
            </View>
            {/* End Right Card */}
          </View>
        </View>

        {/* End Here */}
      </View>
    </ScrollView>
  );
};

export default HomeChaiCodeEats;

const styles = StyleSheet.create({
  main: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.heading_white,
    marginTop: 15,
    fontSize: 11,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 12,
    width: "100%",
  },
  searchPrefix: {
    width: "10%",
    alignItems: "center",
    tintColor: Colors.grey_bg,
  },
  searchText: {
    fontSize: 16,
    width: "80%",
  },
  searchSuffix: {
    width: "10%",
    tintColor: Colors.heading_brown_text,
    color: Colors.Rating,
    alignItems: "center",
  },
  category: {
    width: "100%",
    marginTop: 24,
  },
  categoryH1: {
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 30,
    textAlign: "left",
    color: Colors.Black,
    fontFamily: "PlusJakartaSans_700Bold",
  },

  categoryContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  categoryButtons: {
    flexDirection: "column",
  },
  categoryButton: {
    alignItems: "center",
    marginRight: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  categoryimg: {
    flexDirection: "row",
    backgroundColor: Colors.heading_light_text,
    width: 75,
    height: 75,
    resizeMode: "cover",
    padding: 25,
    borderRadius: 300,
  },
  categoryimgInactive: {
    flexDirection: "row",
    backgroundColor: Colors.grey_icon_bg,
    width: 75,
    height: 75,
    resizeMode: "cover",
    padding: 25,
    borderRadius: 300,
    tintColor: "red",
  },
  categoryTextActive: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.Black,
    fontWeight: 700,
    letterSpacing: 0.7,
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 12,
  },
  categorytextInactive: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.Black,
    fontWeight: 700,
    letterSpacing: 0.7,
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 12,
  },
  featuredMain: {
    width: "100%",
    marginTop: 24,
  },
  featuredCard: {
    width: "100%",
    backgroundColor: Colors.heading_white,
    borderRadius: 12,
    paddingBottom: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  featuredHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    verticalAlign: "middle",
    marginTop: 12,
  },

  featuredLink: {
    fontSize: 14,
    letterSpacing: 0.7,
    fontFamily: "PlusJakartaSans_700Bold",
    color: Colors.heading_dark_text,
  },
  featuredImg: {
    backgroundColor: Colors.heading_white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: 180,
    overflow: "hidden",
  },
  featuredBottom: {
    marginTop: 12,
    paddingLeft: 12,
    borderRadius: 12,
    color: Colors.heading_white,
  },

  categoryHighlight: {
    flexDirection: "row",
    verticalAlign: "middle",
    // backgroundColor: "yellow",
  },
  categoryHText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_400Regular",
    lineHeight: 24,
    letterSpacing: 0.16,
    marginTop: 3,
  },

  categoryHIcon: {
    marginTop: 12,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 12,
  },

  servicesMain: {
    // backgroundColor: "green",
    flexDirection: "row",
    gap: 0,
    justifyContent: "flex-start",
  },
  servicesDelivery: {
    flexDirection: "row",
    verticalAlign: "middle",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  deliveryGap: {
    marginLeft: 30,
  },
  deliverIcon: {
    color: Colors.heading_brown_text,
    transform: [{ scaleX: -1 }],
  },
  deliveryText: {
    color: Colors.heading_brown_text,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 12,
  },

  popularMain: {
    // backgroundColor: "yellow",
    marginTop: 12,
  },

  popularCardMain: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "pink",
    height: 250,
    gap: 12,
  },
  singlecard: {
    width: "48%",
  },

  popularImg: {
    marginTop: 12,
    borderRadius: 12,
    height: 180,
    width: "100%",
    resizeMode: "cover",
  },
  popularIcon: {
    width: 35,
    height: 35,
    backgroundColor: Colors.heading_white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    transform: [{ translateX: 120 }, { translateY: -50 }],
  },

  popularBottom: {
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "flex-start",
    transform: [{ translateX: 0 }, { translateY: -40 }],
  },
  popularBottomText: {
    fontSize: 16,
    textAlign: "left",
    color: Colors.Black,
    fontWeight: 700,
    letterSpacing: 0.7,
    fontFamily: "PlusJakartaSans_500Medium",
    marginTop: 12,
  },
  popularLink: {
    fontSize: 14,
    letterSpacing: 0.7,
    fontFamily: "PlusJakartaSans_700Bold",
    color: Colors.heading_dark_text,
  },
});
