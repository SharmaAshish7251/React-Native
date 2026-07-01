import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AssignFontScaleandScale = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const isTablet = width >= 768;

  const styles = createStyles(fontScale, scale, isTablet);

  console.log(useWindowDimensions());

  const landscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const portrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <Text style={styles.safetitle}>AssignFontScaleandScale</Text>
        <View style={styles.buttoncontainer}>
          <Pressable onPress={portrait} style={styles.button}>
            <Text
              style={{
                color: "white",
              }}
            >
              Portrait
            </Text>
          </Pressable>

          <Pressable onPress={landscape} style={styles.button}>
            <Text
              style={{
                color: "white",
              }}
            >
              Landscape
            </Text>
          </Pressable>
        </View>

        <Text style={styles.text}>Window Dimension Data</Text>
        {/* card 1 */}
        <View
          style={[
            styles.container,
            { flexDirection: isTablet ? "column" : "row" },
          ]}
        >
          {/* Left hand  */}
          <View style={styles.LeftContainer}>
            <Text style={[styles.maintitle]}>Stay Cool This Summer</Text>
            <Text style={styles.text}>
              Enjoy a refreshing summer moment with a chilled drink under the
              bright sun, capturing carefree vibes, hydration, and vibrant
              outdoor lifestyle filled with energy and relaxation.
            </Text>
          </View>

          {/* Right Hand */}
          <View style={styles.RightContainer}>
            <Image
              style={styles.ImgCss}
              resizeMode="cover"
              source={require("@/assets/images/summer.jpg")}
            />
          </View>
        </View>
        {/* Card End */}

        {/* card 2 */}
        <View
          style={[
            styles.container,
            { flexDirection: isTablet ? "column" : "row" },
          ]}
        >
          {/* Left hand  */}
          <View style={styles.LeftContainer}>
            <Text style={styles.maintitle}>Relaxing Beach Escape</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text>
            <Text style={styles.text}>
              Relax by the serene beach with colorful umbrellas and comfortable
              chairs, enjoying warm sunshine, gentle breeze, and peaceful
              surroundings perfect for summer vacations and leisure.
            </Text>
          </View>

          {/* Right Hand */}
          <View style={styles.RightContainer}>
            <Image
              style={styles.ImgCss}
              resizeMode="cover"
              source={require("@/assets/images/umbrella.jpg")}
            />
          </View>
        </View>
        {/* Card End */}

        {/* card 1 */}
        <View
          style={[
            styles.container,
            { flexDirection: isTablet ? "column" : "row" },
          ]}
        >
          {/* Left hand  */}
          <View style={styles.LeftContainer}>
            <Text style={styles.maintitle}>Stay Cool This Summer</Text>
            <Text style={styles.text}>
              Enjoy a refreshing summer moment with a chilled drink under the
              bright sun, capturing carefree vibes, hydration, and vibrant
              outdoor lifestyle filled with energy and relaxation.
            </Text>
          </View>

          {/* Right Hand */}
          <View style={styles.RightContainer}>
            <Image
              style={styles.ImgCss}
              resizeMode="cover"
              source={require("@/assets/images/summer.jpg")}
            />
          </View>
        </View>
        {/* Card End */}

        {/* card 2 */}
        <View
          style={[
            styles.container,
            { flexDirection: isTablet ? "column" : "row" },
          ]}
        >
          {/* Left hand  */}
          <View style={styles.LeftContainer}>
            <Text style={styles.maintitle}>Relaxing Beach Escape</Text>
            <Text style={styles.text}>
              Relax by the serene beach with colorful umbrellas and comfortable
              chairs, enjoying warm sunshine, gentle breeze, and peaceful
              surroundings perfect for summer vacations and leisure.
            </Text>
          </View>

          {/* Right Hand */}
          <View style={styles.RightContainer}>
            <Image
              style={styles.ImgCss}
              resizeMode="cover"
              source={require("@/assets/images/umbrella.jpg")}
            />
          </View>
        </View>
        {/* Card End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignFontScaleandScale;

const createStyles = (fontScale: number, scale: number, isTablet: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: "white",
      flexDirection: "row",
      padding: 12,
      borderRadius: 21,
      margin: 9,
      elevation: 4,
    },

    LeftContainer: {
      justifyContent: "center",
      width: "65%",
    },

    RightContainer: {
      width: "35%",
      alignItems: "center",
      justifyContent: "center",
    },

    safetitle: {
      fontSize: isTablet ? 28 : 21 * fontScale,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "white",
      padding: 12,
    },

    maintitle: {
      fontSize: isTablet ? 21 : 18 * fontScale,
      fontWeight: "bold",
    },

    text: {
      fontSize: isTablet ? 18 : 15 * fontScale,
      fontWeight: "400",
    },

    ImgCss: {
      width: isTablet ? 165 * (scale / 2) : 110,
      height: isTablet ? 190 * (scale / 2) : 140,
      borderRadius: 9,
    },

    buttoncontainer: {
      flexDirection: "row",
    },

    button: {
      width: "50%",
      backgroundColor: "purple",
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
  });
