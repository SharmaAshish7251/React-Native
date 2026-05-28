import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Colors from "./Colors";

const Assignment = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isFocusedButton, setisFocusedButton] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={40}
      style={{ flex: 1, backgroundColor: Colors.background }}
      enabled={true}
    >
      <ScrollView
        style={{
          marginTop: 15,
          paddingLeft: 15,
          paddingRight: 15,
          width: "100%",
          backgroundColor: Colors.background,
        }}
      >
        {/* Logo Placeholder */}
        <View
          style={{
            width: "100%",
            height: 150,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 75,
              width: 75,
              tintColor: Colors.primary,
            }}
            resizeMode="cover"
            source={require("@/assets/Ashish-Sharma.png")}
          />
        </View>

        {/* Label Signin */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: Colors.text,
              marginLeft: 3,
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "grey",
            }}
          >
            Let's experience the joy of telecare AI.
          </Text>
        </View>

        {/* Email  */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Email Address
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              borderColor: isFocusedEmail ? Colors.primary : "grey",
              borderWidth: isFocusedEmail ? 2 : 1,
              borderRadius: 12,
              paddingLeft: 9,
              paddingTop: 6,
              paddingBottom: 6,
              backgroundColor: Colors.white ,
            }}
          >
            <Ionicons
              name="mail"
              size={20}
              color={isFocusedEmail ? Colors.primary : Colors.text}
            />
            <TextInput
              onFocus={() => setIsFocusedEmail(!isFocusedEmail)}
              onBlur={() => setIsFocusedEmail(!isFocusedEmail)}
              style={{
                fontSize: 15,
                marginLeft: 3,
              }}
              placeholder="Enter your email address"
            />
          </View>
        </View>

        {/* Password */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              borderColor: isFocusedPass ? Colors.primary : "grey",
              borderWidth: isFocusedPass ? 2 : 1,
              backgroundColor : Colors.white,
              borderRadius: 12,
              paddingLeft: 9,
              overflow: "hidden",
              marginTop: 3,
              paddingTop: 6,
              paddingBottom: 6,
              width : "100%",
            }}
          >
            <FontAwesome name="lock" size={20} color="black" />
            <TextInput
              secureTextEntry={!isFocusedPass}
              onFocus={() => setIsFocusedPass(true)}
              onBlur={() => setIsFocusedPass(false)}
              placeholder="Enter your Password"
              style={{
                flex: 1,
                fontSize: 15,

                marginLeft: 3,
              }}
            />
            <Pressable
              onPress={() => setIsFocusedPass(!isFocusedPass)}
              style={{ paddingRight: 9 }}
            >
              <FontAwesome
                name={isFocusedPass ? "eye" : "eye-slash"}
                size={20}
                color="black"
              />
            </Pressable>
          </View>
        </View>

        {/* Button */}

        <Pressable
          style={{
            padding: 12,
            flex: 1,
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 21,
            backgroundColor: isFocusedButton ? Colors.primary : Colors.primary,
            borderColor: isFocusedButton ? Colors.primary : Colors.primary,
            borderRadius: 12,
          }}
          onPress={() => {
            setisFocusedButton(!isFocusedButton);
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
          <FontAwesome
            style={{
              fontSize: 16,
              color: "#fff",
              alignContent: "center",
              justifyContent: "center",
              paddingLeft: 6,
              paddingTop: 3,
            }}
            name="arrow-right"
          />
        </Pressable>

        {/* Social Icons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 21,
          }}
        >
          {/* Facebook */}
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => ({
              backgroundColor: pressed ? Colors.primary : "#fff",
              padding: 15,
              paddingLeft: 18,
              paddingRight: 18,
              borderColor: pressed ? Colors.primary : "grey",
              borderWidth: 1,
              borderRadius: 9,
            })}
          >
            {({ pressed }) => (
              <FontAwesome
                name="facebook"
                color={pressed ? "#fff" : Colors.text}
                size={28}
              />
            )}
          </Pressable>
          {/* Google */}
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => ({
              backgroundColor: pressed ? Colors.primary : "#fff",
              padding: 15,
              paddingLeft: 15,
              paddingRight: 15,
              borderColor: pressed ? Colors.primary : "grey",
              borderWidth: 1,
              borderRadius: 9,
              marginLeft: 6,
              marginRight: 6,
            })}
          >
            {({ pressed }) => (
              <FontAwesome
                name="google"
                size={28}
                color={pressed ? "#fff" : Colors.text}
              />
            )}
          </Pressable>

          {/* Instgram */}
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => ({
              backgroundColor: pressed ? Colors.primary : "#fff",
              padding: 15,
              paddingLeft: 15,
              paddingRight: 15,
              borderColor: pressed ? Colors.primary : "grey",
              borderWidth: 1,
              borderRadius: 9,
            })}
          >
            {({ pressed }) => (
              <FontAwesome
                name="instagram"
                size={28}
                color={pressed ? "#fff" : Colors.text}
              />
            )}
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 21,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Don't have an account?
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.primary,
              marginLeft: 3,
              textDecorationLine: "underline",
            }}
          >
            Sign Up.
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 9,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.primary,
              marginLeft: 3,
              textDecorationLine: "underline",
            }}
          >
            Forgot your password?
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Assignment;

const styles = StyleSheet.create({});
