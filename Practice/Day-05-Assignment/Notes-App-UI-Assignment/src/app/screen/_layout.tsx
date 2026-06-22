import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="homeScreen">
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="editNotesScreen"
        options={{
          title: "Edit",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="pen-to-square" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
