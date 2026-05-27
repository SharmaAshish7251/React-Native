import { useState } from "react";
import { Button, ScrollView, StyleSheet, Switch, Text } from "react-native";

const HomeScreen = () => {
  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: "grey",
      }}
    >
      {items.map((item) => (
        <Text
          key={item}
          style={{
            marginTop: 6,
            flex: 3,
            width: 100,
            borderRadius: 6,
            padding: 12,
            backgroundColor: "white",
            color: "black",
          }}
        >
          {item}
        </Text>
      ))}

      <Button
        title="Press Me"
        color="green"
        onPress={() => alert("Button Pressed")}
      />

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "white", true: "white" }}
        thumbColor={"grey"}
      />

      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
