import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecureStorageMethod() {
  const [output, setOutput] = useState<string>('');


  // save method
  const saveToken = async () => {
    await SecureStore.setItemAsync(
      'token', 'abc123xyz'
    );
    setOutput("Token Saved Successfully");
  }

  // get method
  const getToken = async () => {
    const value = await SecureStore.getItemAsync(
      "token"
    );
    setOutput(value!)
  }


  // delete method
  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("token");
    setOutput("Token Deleted");
  }

  // conditional checking 
  const checkAvailability = async () => {
    const available =
      await SecureStore.isAvailableAsync();
    setOutput(
      available ? "Secure Store Available" : "Secure Store Not Available");

  }

  // save Object

  const saveObject = async () => {
    const user = {
      name: "Ashish",
      role: "Admin",
    };

    await SecureStore.setItemAsync(
      "user", JSON.stringify(user),
    )
    setOutput("Object Saved")

  };

  // get object
  const getObject = async () => {
    const data = await SecureStore.getItemAsync("user");

    if (!data) {
      setOutput("No user found");
      return;
    }

    const parsed = JSON.parse(data);
    setOutput(`${parsed.name} - ${parsed.role}`);


  }




  return (
    <View>
      <Text>secureStorageMethod</Text>
      <Button title='Save Token' onPress={saveToken} />
      <Button title='Get Token' onPress={getToken} />
      <Button title='Delete Token' onPress={deleteToken} />
      <Button title='Check Availablity' onPress={checkAvailability} />
      <Button title='Save Object' onPress={saveObject} />
      <Button title='Get Object' onPress={getObject} />
      <Text>Output : {output}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})