import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

// open db connection if db not found it will create
const db = SQLite.openDatabaseSync("demo.db");

export default function SqliteStorageMethod() {
  const [output, setOutput] = useState("");


  //  create Table
  const createTable = () => {
    db.execSync(`
      
      CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER
      );

      `)
    setOutput("Table Created");
  };


  // Insert Data 
  const insertData = () => {
    db.runSync(

      "INSERT INTO users (name, age) VALUES (?,?)",
     [ "Ashish",25]
    );
  };


  // get users (show)
  const getUsers = () => {
    const users = db.getAllSync(
      "SELECT * FROM users"
    );
    //  2 for formatted JSON
    setOutput(JSON.stringify(users, null, 2));
  };


  // get first user
  const getFirstuser = () => {
    const user =  db.getFirstSync(
      "SELECT * FROM users"
    );
    setOutput(JSON.stringify(user, null, 2));
  }


  // update user
  const updateUser = () => {
    db.runSync(
      'UPDATE users SET age=? WHERE id=?',
      25,
      1,
    );
    setOutput("User Details Updated");
  }


  // delete user
  const deleteUser = () => {
    db.runSync(
      'DELETE FROM users WHERE id =?',
      1,
    );
    setOutput("User Deleted");
  }


  // drop(delete) table
  const deleteTable = () => {
    db.runSync(
      'DROP TABLE IF EXISTS users',
    );
    setOutput('Users table droppped')
  }


  useEffect(() => {
    createTable()
  }, [])


  return (
    <View style={styles.container}>

      <Button title='Create Table' onPress={createTable} />
      <Button title='Insert Data' onPress={insertData} />
      <Button title='Get users Data' onPress={getUsers} />
      <Button title='Get First user' onPress={getFirstuser} />
      <Button title='Update User' onPress={updateUser} />
      <Button title='Delete Data' onPress={deleteUser} />
      <Button title='Drop Table' onPress={deleteTable} />
      <Text style={styles.Heading}>Sql Lite : </Text>
      <ScrollView style={styles.scrollView}>
        <Text>{output}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  Heading: {
    // backgroundColor: 'green',
    marginTop: 10,
    textAlign: 'left',
    width: '90%',
    fontSize: 21,
    fontWeight: 500,
    marginBottom: 12,
  },
  scrollView: {
    width: '90%',
    // backgroundColor: 'red',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    position: 'sticky',
  },
});
