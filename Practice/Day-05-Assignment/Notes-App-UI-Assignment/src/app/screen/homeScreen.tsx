import { LibreCaslonText_400Regular } from '@expo-google-fonts/libre-caslon-text/400Regular';
import { LibreCaslonText_400Regular_Italic } from '@expo-google-fonts/libre-caslon-text/400Regular_Italic';
import { useFonts } from '@expo-google-fonts/libre-caslon-text/useFonts';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotesColors from '../utils/noteColors';
import notesList from '../utils/notesList';

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_400Regular_Italic,
  });

  const ColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(ColorScheme === 'dark');
  const colors = isDark ? NotesColors.dark : NotesColors.light;

  return (
    <SafeAreaView
      style={[styles.maincontainer, {
        backgroundColor: colors.background,
      }]}
    >
      <View style={styles.topMainBg}>
        <Text style={[styles.topMainSubHeading, { color: colors.headingColor }]}>WEDNESDAY, OCT 24</Text>
        <Text style={[styles.topMainHeading, { color: colors.headingColor }]}>Good morning, Ashish.</Text>

        <View style={styles.search}>
          <FontAwesome6 style={styles.iconContainer} name="magnifying-glass" />
          <TextInput style={styles.searchText} placeholder="Search your thoughts..." />
        </View>
        <View style={[styles.divider, { backgroundColor: colors.bgsecondary }]} />

        <View style={styles.divider} />

        <FlatList
          scrollEnabled
          data={notesList}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <View style={[styles.pinnedNote, { backgroundColor: colors.highBg }]}> 
              <View style={styles.topBar}>
                <Text style={[styles.topBarText, { backgroundColor: colors.highlight }]}>PRIMARY FOCUS</Text>
                <FontAwesome6 style={styles.topBartag} color={colors.iconColor} name="paperclip" />
              </View>
              <View style={styles.pinnedNoteMain}>
                <Text style={styles.pinnedNoteMainHeading}>The Philosophy of Quiet Luxury in Digital Product Design</Text>
                <Text style={[styles.pinnedNoteMainText]}>Designing for the senses in a world of visual noise. Focus on tactile modernism, generous…</Text>
                <View style={styles.pinnedNoteMainBottom}>
                  <Text style={styles.pinnedNoteMainBottomText}>Last edited 2h ago</Text>
                  <FontAwesome6 name="dot" />
                  <Text style={styles.pinnedNoteMainBottomText}>4 min read</Text>
                </View>
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={[styles.pinnedNote, { backgroundColor: colors.highBg }]}> 
              <View style={styles.topBar}>
                <Text style={[styles.topBarText, { backgroundColor: colors.highlight }]}>RECENT</Text>
              </View>
              <View style={styles.pinnedNoteMain}>
                <Text style={styles.pinnedNoteMainHeading}>{item.title}</Text>
                <Text style={[styles.pinnedNoteMainText]}>{item.description}</Text>
              </View>
              <View style={styles.pinnedNoteMainBottom}>
                <Text style={[styles.pinnedNoteMainBottomText]}>{item.hoursAgo}</Text>
                <Text style={[styles.pinnedNoteMainBottomText]}>{item.timeRead}</Text>
              </View>
            </View>
          )}
          ListFooterComponent={
            <View style={styles.addNewEntry}>
              <FontAwesome6 style={styles.addNewIcon} name="plus" />
              <Text>NEW ENTRY</Text>
            </View>
          }
          style={{ flex: 1, marginTop: 12, width: '100%' }}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  topMainBg: {
    flex: 1,
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
    fontFamily: 'LibreCaslonText_400Regular',
    fontWeight: 'semibold',
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: '10%',
    marginLeft: 6,
  },
  searchText: {
    width: '80%',
    fontFamily: 'LibreCaslonText_400Regular',
  },
  divider: {
    width: '100%',
    height: 1,
    marginTop: '3%',
  },
  pinnedNote: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    padding: '6%',
    borderRadius: 12,
    marginBottom: '5%',
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  topBarText: {
    fontFamily: 'LibreCaslonText_400Regular',
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
  pinnedNoteMain: {
    flexDirection: 'column',
  },
  pinnedNoteMainHeading: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'LibreCaslonText_400Regular',
    fontWeight: 'semibold',
    marginTop: 12,
  },
  pinnedNoteMainText: {
    fontFamily: 'LibreCaslonText_400Regular',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
    borderRadius: 21,
  },
  pinnedNoteMainBottom: {
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinnedNoteMainBottomText: {
    fontFamily: 'LibreCaslonText_400Regular',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
    borderRadius: 21,
  },
  addNewEntry: {
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    borderStyle: 'dashed',
    marginTop: '6%',
    marginBottom: '24%',
  },
  addNewIcon: {
    width: 40,
    height: 40,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: '#E3E9E9',
    marginBottom: 12,
  },
});
