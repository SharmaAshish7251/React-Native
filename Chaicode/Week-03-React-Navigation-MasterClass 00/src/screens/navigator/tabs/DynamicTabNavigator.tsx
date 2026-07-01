import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 100,
        },
        tabBarActiveBackgroundColor: "rgba(201, 201, 198, 0.32)",
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "Home"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
                ? focused
                  ? "search"
                  : "search-outline"
                : focused
                  ? "chatbubble"
                  : "chatbubble-outline";

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        //   if we wants to customize tab name Label we can tabbarlabel will change bottom nav title not header title
        options={{
          title: "Dashboard",
          tabBarLabel: "Start",
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarBadge : 3, // like notification count
      }} />
    </Tab.Navigator>
  );
}

export default function DynamicTabsNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
