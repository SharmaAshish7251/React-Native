import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      {state.routes.map((route, index) => {
        console.log(route);

        // check active tab
        const isFocused = state.index === index;

        // get screen options
        const { options } = descriptors[route.key];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: isFocused ? "blue" : "grey",
              }}
            >
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default function TabLayout() {
  return (
    <Tabs tabBar={(props)=>(<MyTabBar {...props}/>)} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="feature"
        options={{
          title: "feature",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
        }}
      />
    </Tabs>
  );
}
