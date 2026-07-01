import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="feature"
        options={{
          title: "feature",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="star" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gear" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
