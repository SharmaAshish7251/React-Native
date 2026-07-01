import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerInactiveBackgroundColor: "#6366f1",
        drawerInactiveTintColor: "#9ca3af",
        drawerStyle: { backgroundColor: "#fff", width: 240 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({}) => <FontAwesome6 name="home" />,
        }}
      />
      <Drawer.Screen
        name="feature"
        options={{
          drawerLabel: "Feature",
          title: "Feature",
          drawerIcon: ({}) => <FontAwesome6 name="bulb" />,
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({}) => <FontAwesome6 name="gear" />,
        }}
      />
    </Drawer>
  );
}
