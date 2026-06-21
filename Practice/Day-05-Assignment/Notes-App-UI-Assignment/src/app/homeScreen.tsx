import { LibreCaslonText_400Regular, } from '@expo-google-fonts/libre-caslon-text/400Regular';
import { LibreCaslonText_400Regular_Italic } from '@expo-google-fonts/libre-caslon-text/400Regular_Italic';
import { useFonts } from '@expo-google-fonts/libre-caslon-text/useFonts';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import NotesColors from './utils/noteColors';

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_400Regular_Italic,

  });


  const ColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(
    ColorScheme === "dark"
  );
  const colors = isDark
    ? NotesColors.dark
    : NotesColors.light;

  return (
    <View style={[styles.maincontainer, {
      backgroundColor: colors.background,
    }]}>


      {/* Top  */}
      <View style={[styles.topMainBg, {}]}>
        <Text style={[styles.topMainSubHeading, { color: colors.headingColor }]}>WEDNESDAY, OCT 24</Text>
        <Text style={[styles.topMainHeading, { color: colors.headingColor }]}>Good
          morning,
          Ashish.</Text>
        <View style={styles.search}>
          <FontAwesome6 style={styles.iconContainer} name="magnifying-glass" />
          <TextInput style={styles.searchText} placeholder="Search your thoughts..." />
        </View>
        <View style={[styles.divider, { backgroundColor: "red" }]} />

        {/* Pinned Note */}
        <View style={[styles.pinnedNote, { backgroundColor: colors.highBg }]}>
          {/* Top Bar */}
          <View style={[styles.topBar,]}>
            <Text style={[styles.topBarText, { backgroundColor: colors.highlight }]}>PRIMARY FOCUS</Text>
            <FontAwesome6 style={styles.topBartag} color={colors.iconColor} name="paperclip" />
          </View>

          {/* Pinned Note content */}
          <View style={[styles.pinnedNoteMain]}>
            <Text style={[styles.pinnedNoteMainHeading]}>The Philosophy
              of Quiet Luxury
              in Digital Product
              Design</Text>
            <Text style={[styles.pinnedNoteMainText]}>Designing for the senses in a
              world of visual noise. Focus on
              tactile modernism, generous…</Text>
              <View style={[styles.pinnedNoteMainBottom]}>
                <Text style={[styles.pinnedNoteMainBottomText]}>Last edited 2h ago</Text>
                <FontAwesome6 name="dot" />
                <Text style={[styles.pinnedNoteMainBottomText]}>4 min read</Text>
                
              </View>
          </View>
        </View>

        {/* Recent Notes */}

      </View>
    </View >
  )





}

export default HomeScreen;


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },

  toggle: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 12,
  },
  heading: {
    fontSize: 24,
  },
  topMainBg: {

  },
  topMainSubHeading: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2.4,
  },

  topMainHeading: {
    fontSize: 48,
    lineHeight: 60,
    letterSpacing: 2.4,
    fontFamily: "LibreCaslonText_400Regular",
    fontWeight: 'semibold',
  },
  search: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: "10%",
    marginLeft: 6,

  },
  searchText: {
    width: "80%",
    fontFamily: "LibreCaslonText_400Regular",
  },
  divider: {
    width: "100%",
    height: 1,

  },

  pinnedNote: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: "6%",
    borderRadius: 12,
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  topBarText: {
    fontFamily: "LibreCaslonText_400Regular",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 1,
    borderRadius: 21,
    padding: 6,
  },
  topBartag: {
    fontSize: 18,
    marginTop: 6,
  },
})