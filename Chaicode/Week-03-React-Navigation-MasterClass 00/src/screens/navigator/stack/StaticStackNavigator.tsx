import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../../DetailsScreen";
import HomeScreen from "../../HomeScreen";
import ProfileScreen from "../../ProfileScreen";


// Basic Stack Navigation
const Stack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile : ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigator() {
  return <Navigation />;
}
