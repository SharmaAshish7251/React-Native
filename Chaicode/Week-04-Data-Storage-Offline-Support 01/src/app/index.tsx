import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorageMethod from "./screens/asyncStorageMethod";
import SecureStorageMethod from "./screens/secureStorageMethod";
import SqliteStorageMethod from "./screens/sqliteStorageMethod";
import FileSystemScreen from "./screens/file-system/fileSystem";


export default function Index() {

  return (
    <View style={styles.container}>
      <Text>Storage Methods</Text>
      {/* <AsyncStorageMethod /> */}
      {/* <SecureStorageMethod /> */}
      {/* <SqliteStorageMethod /> */}
      <FileSystemScreen />
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
