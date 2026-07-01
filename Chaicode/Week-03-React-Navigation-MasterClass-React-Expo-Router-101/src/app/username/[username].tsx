import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserNameScreen = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>UserNameScreen {username}</Text>
    </View>
  );
};

export default UserNameScreen;

const styles = StyleSheet.create({});
