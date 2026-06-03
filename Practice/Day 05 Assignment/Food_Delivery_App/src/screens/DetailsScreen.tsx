import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Suraj",
    });
  }, [navigation]);

  return (
    <View>
      <Text>DetailsScreen</Text>
      {/* Back  Navigation */}
      {/* <Button title="go back" onPress={() => navigation.goBack} /> */}
      <Button title="go back" onPress={() => navigation.goBack()} />

      {/* Dynamic Data pass  */}
      <Button
        title="Dynamic Button"
        onPress={() =>
          navigation.navigate("Profile", { username: "Hooo! Dynamic Data" })
        }
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
