import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import DevColors from "../utils/DevColors";

const tabScreens = [
  {
    name: "Home_Screen",
    title: "Snippets",
    icon: "code",
    outlineIcon: "code-outline",
  },
  {
    name: "Favourites_Screen",
    title: "Favorites",
    icon: "heart",
    outlineIcon: "heart-outline",
  },
  {
    name: "File_Manager_Screen",
    title: "Files",
    icon: "folder",
    outlineIcon: "folder-outline",
  },
  {
    name: "Settings_Screen",
    title: "Settings",
    icon: "settings",
    outlineIcon: "settings-outline",
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: DevColors.onSecondaryContainer,
        tabBarActiveBackgroundColor: DevColors.secondaryContainer,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: DevColors.surfaceContainer,
        },
      }}
    >
      {tabScreens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  focused
                    ? (screen.icon as any)
                    : (screen.outlineIcon as any)
                }
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}

      {/* Hide screens */}
      <Tabs.Screen
        name="Create_Snippet_Screen"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="Snippet_Details_Screen"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}