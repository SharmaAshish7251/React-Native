import { Text } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Auth Layout Header</Text>
      {/* <Stack 
      screenOptions={{
        headerStyle: {backgroundColor : '#f4511e'},
        headerTintColor : "#fff", // Header Text Color
        headerTitleStyle : {fontWeight: 'bold'},
      }}
      /> */}

      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerStyle: {
              backgroundColor: "#f4b",
            },
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
      </Stack>
      <Text>Auth Layout Footer</Text>
    </View>
  );
}
