import { StyleSheet, Text, View } from "react-native";

const stylesA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const stylesB = StyleSheet.create({
  text: { fontSize: 24, fontWeight: "bold" },
});

const flat = StyleSheet.flatten([stylesA.text, stylesB.text]);

const FlattendStyle = () => {
  return (
    <View>
      <Text style={flat}>FlattendStyle</Text>
    </View>
  );
};

export default FlattendStyle;
