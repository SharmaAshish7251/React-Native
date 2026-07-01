import { StyleSheet, View } from "react-native";
import UseWindowDimensions from "./UseWindowDimensions";
import ColorScheme from "./ColorScheme";
import AssignFontScaleandScale from "./assignment/AssignFontScaleandScale";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>index</Text> */}
      {/* <FlattendStyle /> */}
      {/* <UseWindowDimensions /> */}
      {/* <ColorScheme /> */}
      <AssignFontScaleandScale />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
