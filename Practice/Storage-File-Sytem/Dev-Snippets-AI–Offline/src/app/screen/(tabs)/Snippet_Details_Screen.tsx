import { FontAwesome6 } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DevColors from '../utils/DevColors';
import DevSnippets from '../utils/DevSnippets';
import DevText from '../utils/DevText';
import DevHeading from '../utils/DevTitle';
import * as Application from "expo-application";



const Snippet_Details_Screen = () => {
  const version = Application.nativeApplicationVersion;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [code, setCode] = useState("");
  const handleCodeChange = useCallback((text: string) => setCode(text), []);
  const lineCount = code === "" ? 1 : code.split("\n").length;
  console.log(lineCount);
  const lineNumbers = Array.from(
    { length: code === "" ? 1 : code.split("\n").length },
    (_, i) => i + 1
  );

  // set to store unique values
  const [items, setItems] = useState(
    DevSnippets.filter(
      (item, index, self) =>
        index === self.findIndex(i => i.category === item.category)
    ).map(item => ({
      label: item.category,
      value: item.category,
      icon: () => (
        <FontAwesome6
          name={item.icon}
          color={item.iconColor}
          size={18}
        />
      ),
    }))
  );


  // set to store unique values
  const [tags, setTags] = useState(
    [...new Set(DevSnippets.flatMap(item => item.tags))]
      .map((tag, index) => ({
        id: index + 1,
        value: tag,
      }))
  );

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraHeight={120}
      style={styles.mainContainer}
    >
      {/* Top Conatiner */}
      <View style={styles.topContainer}>
        <View style={styles.topTitleIconContainer}>
          <DevText style={styles.topCategory}>TypeScript Utility</DevText>
          <DevText style={styles.topVersion}>{version}</DevText>
        </View>

        <DevHeading style={styles.topTitle}>DeepPartial(T) Recursive
          Mapping</DevHeading>
        <DevText numberOfLines={6} style={styles.topTitleSub}>A specialized utility type for recursively making
          all properties of an object optional, including nested objects and arrays.</DevText>

        {/* Quick Button */}
        <View style={styles.topQuickMainContainer}>
          <Pressable style={styles.topQuickButtonContainer}>
            <FontAwesome6 style={styles.topQuickButtonIcon} name="pen" />
            <DevText style={styles.topQuickButtonText}>Edit</DevText>
          </Pressable>

          <Pressable style={styles.topQuickButtonContainer}>
            <FontAwesome6 style={styles.topQuickButtonIcon} name="bookmark" />
            <DevText style={styles.topQuickButtonText}>Favourite</DevText>
          </Pressable>

          <Pressable style={styles.topQuickButtonContainer0}>
            <FontAwesome6 style={styles.topQuickButtonIcon} name="trash-can" />
            <DevText style={styles.topQuickButtonText}>Delete</DevText>
          </Pressable>
        </View>
      </View>

      <View style={styles.snippetMainContainer}>

        {/* Top Quick Info */}
        <View style={styles.snippetContainerHead}>
          <View style={styles.snippetContainerHeadLeft}>
            <FontAwesome6 style={styles.snippetBottomButtonLeftIcon0} name="circle-notch" />
            <FontAwesome6 style={styles.snippetBottomButtonLeftIcon1} name="circle-notch" />
            <FontAwesome6 style={styles.snippetBottomButtonLeftIcon2} name="circle-notch" />
          </View>
          <View style={styles.snippetContainerCenter}>
            <DevText style={styles.snippetContainerCenterText} numberOfLines={1}>index.ts - main</DevText>
          </View>
          <View style={styles.snippetContainerHeadRight}>
            <FontAwesome6 style={styles.snippetContainerHeadRightIcon} name="clipboard" />
            <FontAwesome6 style={styles.snippetContainerHeadRightIcon} name="expand" />
          </View>
        </View>

        {/* center */}


        <View style={styles.snippetMainContainerCode}>
          <View style={styles.snippetMainContainerCodeLeft}>
            {lineNumbers.map(line => (
              <DevText key={line} style={styles.lineNumber}>
                {line}
              </DevText>
            ))}

          </View>
          <View style={styles.snippetMainContainerCodeRight}>
            <TextInput
              numberOfLines={999}
              cursorColor={DevColors.onSucess}
              scrollEnabled={true}
              multiline
              value={code}
              onChangeText={setCode}
              placeholder="Write your code here..."
              placeholderTextColor={DevColors.outlineVariant}
              style={styles.codeInput}
              textAlignVertical="top"
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              selectionColor={DevColors.primary}
            />
          </View>
        </View>
      </View>


      {/* Bottom */}
      <View style={styles.bottomTopContainerMain}>
        {/* top Bottom */}
        <View style={styles.bottomTopContainer}>
          <FontAwesome6 style={styles.bottomTopContainerIcon} name="wand-magic-sparkles" />
          <DevHeading style={[styles.topTitle, {
            paddingBottom: "3%",
          }]}>AI Explanation</DevHeading>
        </View>

        {/* Suggestion */}
        <View style={styles.suggestionMainContainer}>
          <DevText>This utility leverages TypeScript's conditional types and mapped types to
            traverse deep data structures. It checks if each property is an object or an array;
            if it is, the utility recursively calls itself on that property's type. Best used
            for: State management interfaces, consguration overrides, and partial database updates.
          </DevText>

          {/* Extra Note */}
          <View style={styles.suggestionExtraNoteMain}>
            {/* Icon with info */}
            <View style={styles.suggestionExtraNote}>
              <FontAwesome6 style={styles.suggestionExtraNoteIcon} name="circle-info" />
              <DevText style={styles.suggestionExtraNoteText}>COMPLEXITY NOTE</DevText>

            </View>

            <DevText>Circular references in types may cause
              recursion depth errors. Ensure target
              interfaces are acyclic before applying
              DeepPartial.</DevText>
          </View>
        </View>


        {/* Tags Button */}
        <View style={styles.bottomLowMainContainer}>
          <Pressable style={styles.bottomLowTags0}>
            <DevText style={styles.bottomLowTagsText0}># TYPESCRIPT</DevText>
          </Pressable>

          <Pressable style={styles.bottomLowTags1}>
            <DevText style={styles.bottomLowTagsText1}># UTILITY</DevText>
          </Pressable>

          <Pressable style={styles.bottomLowTags2}>
            <DevText style={styles.bottomLowTagsText2}># PRODUCTIVITY</DevText>
          </Pressable>

          <Pressable style={styles.bottomLowTags3}>
            <DevText style={styles.bottomLowTagsText3} ># NESTEDTYPES</DevText>
          </Pressable>
        </View>

      </View>


    </KeyboardAwareScrollView>
  )
}


export default Snippet_Details_Screen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: DevColors.background,
  },
  topContainer: {
    width: "100%",
    marginTop: "3%",
    padding: "3%",

  },
  topTitle: {
    fontSize: 21,
    marginLeft: "-3%",
    marginTop: "4%",
  },
  topTitleIconContainer: {
    marginTop: 6,
    flexDirection: 'row',
  },
  topCategory: {
    fontSize: 16,
    color: DevColors.primaryContainer,
    backgroundColor: DevColors.primaryContainer + 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 9,
    paddingRight: 9,
    marginLeft: -9,
    borderRadius: 6,
  },
  topVersion: {
    fontSize: 11,
    color: DevColors.onSurfaceVariant,
    marginTop: 9,
    marginLeft: 12,
  },
  topTitleSub: {
    fontSize: 15,
    marginLeft: -9,
  },

  topQuickMainContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    flex: 1,
    gap: 4,
    marginLeft: "-3%",
    marginTop: "6%",
  },
  topQuickButtonContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderColor: DevColors.onSurface,
    borderWidth: 1,
    verticalAlign: 'bottom',
  },
  topQuickButtonIcon: {
    color: DevColors.onSurface,
    paddingRight: 12,
    verticalAlign: 'middle',
  },
  topQuickButtonText: {
    fontSize: 14,
    color: DevColors.onSurface,
    verticalAlign: 'middle',
    fontWeight: 500,
  },


  topQuickButtonContainer0: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderColor: DevColors.errorContainer,
    borderWidth: 1,
    verticalAlign: 'bottom',
  },
  topQuickButtonIcon0: {
    color: DevColors.error,
    paddingRight: 12,
    verticalAlign: 'middle',
  },
  topQuickButtonText0: {
    fontSize: 14,
    color: DevColors.error,
    verticalAlign: 'middle',
    fontWeight: 500,
  },



  snippetMainContainer: {
    flexDirection: 'column',
    backgroundColor: DevColors.surfaceContainerLow,
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    borderRadius: 4,
    marginTop: "2%",
    padding: "3%",
  },

  snippetContainer: {
    backgroundColor: DevColors.surfaceContainerLow,
    borderRadius: 6,
    width: "100%",
    flexDirection: 'row',
  },
  snippetBottomContainerMain: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "3%",
    paddingRight: "12%",
    marginBottom: "3%",
  },
  snippetBottomContainerMainIcon: {
    color: DevColors.primaryContainer,
    fontSize: 16,
    marginRight: "3%",
  },
  leftSnippetIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  leftSnippetIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DevColors.onSucess + "10",
    borderWidth: 1,
    borderColor: DevColors.onSucess + "30",
    padding: "30%",
    fontSize: 12,
  },
  centerSnippetContainer: {
    width: "80%",
    flexDirection: "column",
    paddingLeft: "3%",
  },

  snippetMainContainertags: {
    flexDirection: "row",
    width: "100%",
    overflow: 'hidden',
  },
  codeInput: {
    flex: 1,
    height: "100%",
    color: DevColors.onSurface,
    minHeight: 220,
    textAlignVertical: "top",
    lineHeight: 20,
    includeFontPadding: false,
    marginTop: "03%",
  },
  snippetContainerHead: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: DevColors.surfaceContainerHigh,
    borderRadius: 3,
    // overflow:"hidden",
  },
  snippetContainerHeadLeft: {
    flexDirection: 'row',
    width: "20%",
    gap: 6,
    padding: "3%",
  },
  snippetBottomButtonLeftIcon0: {
    color: DevColors.tertiaryContainer,
    fontSize: 15,
  },
  snippetBottomButtonLeftIcon1: {
    color: DevColors.tertiaryFixedDim,
    fontSize: 15,
  },
  snippetBottomButtonLeftIcon2: {
    color: DevColors.primaryContainer,
    fontSize: 15,
  },
  snippetContainerCenter: {
    width: "60%",
    padding: "3%",

  },
  snippetContainerCenterText: {
    textAlign: "center",
  },
  snippetContainerHeadRight: {
    // backgroundColor: DevColors.surfaceContainerHigh,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "20%",
    padding: "3%",
    // gap: 9,
  },
  snippetContainerHeadRightIcon: {
    color: DevColors.inverseSurface,
    fontSize: 15,
  },
  snippetMainContainerCode: {
    flexDirection: "row",
    overflow: 'hidden',
    flex: 1,
    textAlignVertical: "top",
  },
  snippetMainContainerCodeLeft: {
    width: "10%",
    backgroundColor: DevColors.surfaceContainerLow,
    marginTop: "5%",
  },
  lineNumber: {
    fontSize: 15,
    color: DevColors.outlineVariant,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: DevColors.outlineVariant,
  },
  snippetMainContainerCodeRight: {
    width: "90%",
    paddingLeft: "3%",
  },
  bottomTopContainerMain: {
    flexDirection: "column",
    backgroundColor: DevColors.onContainerinverse,
    marginTop: "6%",
    padding: "3%",
    borderRadius: 6,
  },
  bottomTopContainer: {
    flexDirection: "row",
    alignItems: "center",

  },
  bottomTopContainerIcon: {
    backgroundColor: DevColors.primaryContainer + 10,
    padding: 12,
    color: DevColors.primaryContainer,
    marginRight: "6%",
  },
  suggestionMainContainer: {
    // backgroundColor:"red",
  },
  suggestionExtraNoteMain: {
    flexDirection: 'column',
    backgroundColor: DevColors.surfaceContainerHigh,
    padding: "3%",
    marginTop: "3%",
    borderRadius: 6,
  },
  suggestionExtraNote: {
    flexDirection: "row",
    alignItems: "center",
  },
  suggestionExtraNoteIcon: {
    color: DevColors.secondaryFixedDim,
    marginRight: "3%",
  },
  suggestionExtraNoteText: {
    color: DevColors.secondaryFixedDim,
  },
  bottomLowMainContainer: {
    marginTop: "3%",
    flexDirection: "row",
    flexWrap:"wrap",
    gap:"3%",
    marginBottom:"3%",
  },
  bottomLowTags0: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DevColors.secondaryFixedDim + 10,
  },

  bottomLowTagsText0: {
    color: DevColors.secondaryFixedDim,
  },
  bottomLowTags1: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DevColors.onTertiaryContainer + 30,
  },

  bottomLowTagsText1: {
    color: DevColors.onTertiaryContainer,
  },
  bottomLowTags2: {
    marginVertical:3,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DevColors.primaryContainer + 10,
  },

  bottomLowTagsText2: {
    color: DevColors.primaryContainer,
  },
  bottomLowTags3: {
    marginVertical:3,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DevColors.secondaryFixedDim + 10,
  },

  bottomLowTagsText3: {
    color: DevColors.secondaryFixedDim,
  },

  

})

