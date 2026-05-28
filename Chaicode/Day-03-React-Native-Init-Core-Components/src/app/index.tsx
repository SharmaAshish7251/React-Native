import { ScrollView, StyleSheet } from "react-native";
import Assignment from "./Assignment";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      {/* <BasicComponents /> */}
      <Assignment />
    </ScrollView>
  );   
};

export default HomeScreen;

const styles = StyleSheet.create({});
