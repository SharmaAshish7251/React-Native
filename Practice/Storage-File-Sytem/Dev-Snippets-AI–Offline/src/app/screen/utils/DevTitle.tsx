import { Text, TextProps } from "react-native";
import { useFonts, JetBrainsMono_400Regular, JetBrainsMono_700Bold } from '@expo-google-fonts/jetbrains-mono';
import DevColors from "./DevColors";


export default function DevHeading({
    
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
          fontFamily: "JetBrainsMono_700Bold",
          color: DevColors.onSurface,
          fontSize: 15,
          
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}