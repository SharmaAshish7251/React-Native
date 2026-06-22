import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditNotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EditNotesScreen</Text>
    </View>
  );
};

export default EditNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
