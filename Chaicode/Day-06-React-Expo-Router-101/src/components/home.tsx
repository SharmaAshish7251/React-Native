import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <View>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
        <Link href={"/profile/details"}>Profile</Link>
        <Link href={"/user/12132"}>Go to user Id Page</Link>
        <Link href={"/username/ashish"}>Go to user Name Page</Link>
        <Link href={"/docs/expo-route/introduction"}>Goto Docs</Link>
        {/* can pass as much route as we need  */}
        <Link href={"/docsn/12/2344/sd/6344"}>Nested Routes Without folder</Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
