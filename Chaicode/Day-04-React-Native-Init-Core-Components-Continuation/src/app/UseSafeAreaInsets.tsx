import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const UseSafeAreaInsets = () => {
  const insets = useSafeAreaInsets();

  console.log(insets);

  return (
    <>
      <View
        style={{
          flex: 1,
          //   to add more  space add + sign then value
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom,
        }}
      >
        {/* to change top bar theme style light or dark */}
        <StatusBar barStyle={"default"} />
        <Text>use Safe Area Insets</Text>
      </View>
    </>
  );
};

export default UseSafeAreaInsets;

const styles = StyleSheet.create({});
