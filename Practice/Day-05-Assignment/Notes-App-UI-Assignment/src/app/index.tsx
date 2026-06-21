import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from 'react';
import { Pressable, StyleSheet, useColorScheme, View } from 'react-native';
import HomeScreen from './homeScreen';
import NotesColors from './utils/noteColors';

const index = () => {

    const ColorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(
      ColorScheme === "dark"
    );
    const colors = isDark
      ? NotesColors.dark
      : NotesColors.light;

  return (
    <View style={[styles.maincontainer, {
      backgroundColor: colors.bgsecondary,
    }]}>


      {/* <Pressable style={styles.toggle}
        onPress={() =>
          setIsDark(!isDark)
        } >
        <FontAwesome6 name={isDark ? 'sun' : 'moon'} />
      </Pressable> */}
      <HomeScreen />

    </View >
  )





}

export default index


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  toggle: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 12,
  },
  heading: {
    fontSize: 24,
  },

})