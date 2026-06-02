import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const ProfileScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username } = route.params;
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text>Dynamic Data with route:{username}</Text>
      {/* to any screen */}
      <Button onPress={() => navigation.popTo("Details")}> Details</Button>
      {/* Direct Starting Screen */}
      <Button onPress={() => navigation.popToTop("Home")}> Home</Button>

      {/* No Back  Screen */}
      <Button onPress={() => navigation.replace("Details")}>Details</Button>
      {/* Push -- it will create new stack --  can caused infinite route loop */}
      <Button onPress={() => navigation.push("Home")}>Home</Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
