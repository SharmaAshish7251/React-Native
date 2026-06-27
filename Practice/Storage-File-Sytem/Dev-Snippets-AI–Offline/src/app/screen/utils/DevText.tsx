import { Text, TextProps } from "react-native";
import { useFonts, JetBrainsMono_400Regular, JetBrainsMono_700Bold } from '@expo-google-fonts/jetbrains-mono';
import DevColors from "./DevColors";


export default function DevText({
    
  style,
  children,
  ...props
}: TextProps) {

      let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_700Bold,
  });

  return (
    <Text
      style={[
        {
          fontFamily: "JetBrainsMono_400Regular",
          color: DevColors.onSurface,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}