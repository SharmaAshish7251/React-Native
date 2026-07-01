import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../HomeScreen";
import DetailsScreen from "../../DetailsScreen";
import SearchScreen from "../../SearchScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackScreens} options={{headerShown: false}} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>;
}

export default function NestedDynamicTabsNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
