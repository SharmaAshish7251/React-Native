import { Link } from "expo-router";
import { useRouter } from "expo-router";

import { StyleSheet, Text, View, Button } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Text>Hello World</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/signup"}>Signup</Link>
      <Link href={"/(tabs)"}>Js Tabs</Link>
      <Link href={"/(nativetabs)"}>Native</Link>
      <Link href={"/(customtabs)"}>Custom Tabs</Link>
      <Link href={"/(drawer)"}>Drawer</Link>
      {/* Use Router hook Assigment*/}
      <Button title="Go to About" onPress={() => router.navigate("/about")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
