import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopicNameScreen = () => {
  const { topicname } = useLocalSearchParams();
  return (
    <View>
      <Text>TopicNameScreen : {topicname}</Text>
    </View>
  );
};

export default TopicNameScreen;

const styles = StyleSheet.create({});
