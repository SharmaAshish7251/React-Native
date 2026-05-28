import { useState } from "react";
import {
  FlatList,
  Image,
  Button,
  Switch,
  Text,
  TextInput,
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function BasicComponents() {
  const [name, setName] = useState("");
  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const users = [
    { id: "1", name: "Ashish Sharma", role: "Develop" },
    { id: "2", name: "Ashu Sharma", role: "Digital Marketing" },
    { id: "3", name: "Pawan Saxena", role: "Full Stack Developer" },
    { id: "4", name: "Gvoind Kumar Thakur", role: "HR" },
    { id: "5", name: "Avnish Kumar Ram", role: "Sales Manager" },
    { id: "6", name: "Rahul Kumar Sharma", role: "Accountant" },
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: "grey",
      }}
    >
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

      {items.map((item) => (
        <Text
          key={item}
          style={{
            marginTop: 6,
            flex: 3,
            width: 100,
            borderRadius: 6,
            padding: 12,
            backgroundColor: "white",
            color: "black",
          }}
        >
          {item}
        </Text>
      ))}

      <Button
        title="Press Me"
        color="green"
        onPress={() => alert("Button Pressed")}
      />

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "white", true: "white" }}
        thumbColor={"grey"}
      />

      <Pressable
        onPress={() => alert("Pressable Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "purple" : "dark-purple",
        })}
        // hitslop used for mini components which not easy to click if we click around that it will run works on pressable component
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 20,
          right: 20,
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Pressable...</Text> : <Text>Button Pressed</Text>
        }
      </Pressable>

      <FlatList
        style={{
          backgroundColor: "pink",
        }}
        data={users}
        horizontal // enable horizontal scroll
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.role}</Text>
          </>
        )}
        contentContainerStyle={{ padding: 16, backgroundColor: "orange" }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: "green",
            }}
          />
        )}
      />

        <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput placeholder="Enter your Name" />
              <TextInput placeholder="Enter your Email" />
              <Button onPress={() => {}} title="Login" />
            </KeyboardAvoidingView>
    </ScrollView>
  );
}
