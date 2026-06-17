import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import BackendCalling from "./backendcalling";



export default function Index() {
  const [output, setOutput] = useState("Loading");

  async function callApi(label: string, url: string, options?: RequestInit) {
    setOutput(`${label}\n\n Loading...`);
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setOutput(`${label}\n\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setOutput(`${label}\n\n ${String(error)}`);
    }
  }
  useEffect(() => {
    callApi('GET /api/users', '/api/users')
  }, []);

  useEffect(() => {
    async function pingBackend() {
      const res = await fetch("http://localhost:3000/api/v1/hello-world")
      const data = await res.json()
      console.log(data)
    }
    pingBackend()
  }, [])


  return (

    <View style={styles.container}>


      <BackendCalling />

      <Button title="GET /api/users" onPress={() => callApi("GET /api/users", "/api/users")} />
      <Button title="POST /api/users" onPress={() => callApi("GET /api/users", "/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Test User6", email: "test6@example.com" }),
      })} />
      <Button title="GET /api/users/1"
        onPress={() => callApi("GET /api/users/3", "/api/users/3")}
      />
      <ScrollView style={styles.output}>
        <Text>{output}</Text>
      </ScrollView>
    </View>


  );

}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 48,
      gap: 8,
    },

    output: {},
  }
);