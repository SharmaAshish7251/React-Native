import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../HomeScreen";
import DetailsScreen from "../../DetailsScreen";
import ProfileScreen from "../../ProfileScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "OverView",
        headerStyle: {
          backgroundColor: "grey",
        },
        //   headerShown: false,  // to hide header
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 800,
          fontSize: 21,
        },
      }}
    >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

      {/* Dynamic route with customization */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "OverView",
          headerStyle: {
            backgroundColor: "#111827",
          },
          //   headerShown: false,  // to hide header
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 800,
            fontSize: 21,
          },
          animation: "flip",
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function DynamicStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
