import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";


export default function AsyncStorageMethod() {
  const [data, setData] = useState("");

  // save object
  const myObj = {
    name: "Ashish",
    role: "Developer",
    device: "Logged in"
  }


  // save object useing stringfy
  const saveObj = async () => {
    const objectData = await AsyncStorage.setItem("name", JSON.stringify(myObj));
    setData(objectData!)
  }

  // saveItem
  const saveData = async () => {
    await AsyncStorage.setItem("name", "Ashish")
  }

  // fetch Data
  const getData = async () => {
    const value = await AsyncStorage.getItem("name")
    setData(value!)
  }


  // delete item
  const deleteItem = async () => {
    await AsyncStorage.removeItem("name")
  }

  // clear all
  const wipeData = async () => {
    await AsyncStorage.clear();
    setData("")
  }

  // get all keys
  const allKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys)
  }

  // save multiple fields
  const multiFields = async () => {
    await AsyncStorage.multiSet([
      ["name", "Ashu"],
      ["role", "Developer"],
    ]);
  }

  // get multiple data
  const getMulti = async () => {
   const value =  await AsyncStorage.multiGet(["name", "role"]);
    console.log(value)
  }

  return (
    <View style={styles.container}>
      <Button title="Save Object" onPress={saveObj} />
      <Button title="Save Item" onPress={saveData} />
      <Button title="View Data" onPress={getData} />
      <Button title="Delete Data" onPress={deleteItem} />
      <Button title="Wipe Data" onPress={wipeData} />
      <Button title="All Shows" onPress={allKeys} />
      <Button title="Set Multi Fields" onPress={multiFields} />
      <Button title="Get Multi Fields" onPress={getMulti} />

      <Text>Saved Data : {data}</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
