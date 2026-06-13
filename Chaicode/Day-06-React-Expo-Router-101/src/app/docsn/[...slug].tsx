import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const NestedDynamicRouteWithoutFolders = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>NestedDynamicRouteWithoutFolders : {slug}</Text>
      <Text>Seprated Url : {Array.isArray(slug) ? slug.join("/") : slug}</Text>
    </View>
  );
};

export default NestedDynamicRouteWithoutFolders;

const styles = StyleSheet.create({});
