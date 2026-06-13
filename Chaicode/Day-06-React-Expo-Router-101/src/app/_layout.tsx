import { Stack } from "expo-router";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";

export default function RootLayout() {
  const isLoggedIn = true;

  return (
    <View style={{ flex: 1 }}>
      <Text>Header</Text>
      <Stack>
        <Stack.Protected guard={!isLoggedIn}>
          {/* to hide header, we can also target group */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
        </Stack.Protected>
      </Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(nativetabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(customtabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Text>Footer</Text>
    </View>
  );
}
