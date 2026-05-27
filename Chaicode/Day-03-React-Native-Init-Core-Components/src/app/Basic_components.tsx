import { useState } from "react";
import { Image, Text, TextInput, View, Pressable } from "react-native";

export default function BasicComponents() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quas
        ratione odit, quisquam assumenda, quidem quibusdam, quam voluptatibus
        culpa est ex nulla vitae nobis veniam. Cum rerum laboriosam, hic
        voluptatibus explicabo laudantium!
      </Text>

      {/* Image from Internet */}
      <View style={{ width: 50, height: 35 }}>
        <Image
          source={{
            uri: "https://www.letmegoogle.in/wp-content/uploads/2023/12/New-Let-me-google.png",
          }}
          alt="Letmegoogle Logo"
          width={50}
          height={35}
          resizeMode="cover"
          blurRadius={10}
        />
      </View>

      {/* Image from Local  */}
      <View style={{ width: 100, height: 100 }}>
        <Image
          source={require("@/assets/images/umbrella.jpg")}
          resizeMode="cover"
          width={100}
          height={100}
          alt="Summer Image"
        />
      </View>

      <TextInput
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"blue"}
        style={{
          color: "red",
          backgroundColor: "pink",
        }}
      />

      {/* Normal Button */}
      <Pressable
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "grey" : "red",
        })}
      />

      {/* with callback function */}
      <Pressable
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "grey" : "red",
        })}
      >
        {({ pressed }) =>
          pressed ? <Text> Pressing </Text> : <Text>Press Me</Text>
        }
      </Pressable>
    </View>
  );
}
