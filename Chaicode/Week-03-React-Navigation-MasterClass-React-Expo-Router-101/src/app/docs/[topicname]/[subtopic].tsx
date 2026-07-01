import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTopicScreen = () => {
  const { topicname, subtopic } = useLocalSearchParams();
  return (
    <View>
      <Text>Topic Name : {topicname}</Text>
      <Text>SubTopicScreen : {subtopic}</Text>
    </View>
  );
};

export default SubTopicScreen;

const styles = StyleSheet.create({});
