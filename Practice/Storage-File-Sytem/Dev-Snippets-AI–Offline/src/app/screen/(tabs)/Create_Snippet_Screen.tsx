import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import DevColors from '../utils/DevColors';
import DevText from '../utils/DevText';
import DevHeading from '../utils/DevTitle';
import DropDownPicker from 'react-native-dropdown-picker';
import DevSnippets from '../utils/DevSnippets';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



const Create_Snippet_Screen = () => {
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
          <MaterialIcons name='add-box' style={styles.topTitleIcon} />
          <DevHeading style={styles.topTitle}> Create Snippet</DevHeading>
        </View>
        <DevText numberOfLines={2} style={styles.topTitleSub}>Document your logic for future efficiency.</DevText>
      </View>

      {/* Code Input Fields */}
      <View style={styles.snippetMainContainer}>

        {/* Top Quick Info */}
        <View style={styles.snippetContainer}>
          <View style={styles.centerSnippetContainer}>
            <DevText numberOfLines={1}>SNIPPET TITLE</DevText>
          </View>
        </View>


        {/* Show Code */}
        <View style={styles.showSnippetMain}>
          <DevText style={styles.snippetCode}>T</DevText>
          <TextInput placeholderTextColor={DevColors.outlineVariant} style={styles.snippetTitle} placeholder='e.g. Authentication Middleware' />
        </View>
      </View>


      <View style={styles.snippetMainContainer}>

        {/* Top Quick Info */}
        <View style={styles.snippetContainer}>
          <View style={styles.centerSnippetContainer}>
            <DevText numberOfLines={1}>LANGUAGE</DevText>
          </View>
        </View>

        {/* Show Code */}
        <View style={styles.showSnippetMainDropdown}>
          <DropDownPicker
            containerStyle={{
              width: "100%",
            }}
            listMode="SCROLLVIEW"
            style={styles.showSnippetsDropdown}
            searchable={true}
            theme="DARK"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            showArrowIcon={true}
            placeholder={'Choose a fruit.'}
            dropDownContainerStyle={{
              backgroundColor: DevColors.surfaceVariant,
              borderColor: DevColors.outlineVariant,
            }}
            labelStyle={{
              color: DevColors.onSurface,
            }}
          />
        </View>
      </View>


      <View style={styles.snippetMainContainer}>

        {/* Top Quick Info */}
        <View style={styles.snippetContainer}>
          <View style={styles.centerSnippetContainer}>
            <DevText numberOfLines={1}>TAGS & KEYWORDS</DevText>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.snippetMainContainertags}>
          <Pressable style={styles.tagChip} >
            {tags.map(tag => (
              <View key={tag.id} style={styles.tagChipSub}>
                <DevText>#{tag.value}</DevText>
                <FontAwesome6 style={styles.tagChipIcon} name="xmark" color="white" />
              </View>
            ))}
          </Pressable>
        </View>

        {/* Show Code */}
        <View style={styles.showSnippetMainDropdown}>
          <TextInput placeholderTextColor={DevColors.outlineVariant} style={styles.snippetTitle}
            placeholder='Add tag...' />
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


      <View style={styles.snippetMainContainer}>

        {/* Top Quick Info */}
        <View style={styles.snippetContainer}>
          <View style={styles.snippetBottomContainerMain}>
            <FontAwesome6 style={styles.snippetBottomContainerMainIcon} name="circle-info" />
            <DevText>Snippets are private by default. You can
              change this in settings.</DevText>
          </View>
        </View>

        {/* Show Code */}
        <View style={styles.snippetBottomButtonContainerMain}>
          <Pressable style={styles.snippetBottomButtonLeft}><DevText style={styles.snippetBottomButtonTextLeft}>Cancel</DevText></Pressable>
          <Pressable style={styles.snippetBottomButtonRight}>
            <FontAwesome6 style={styles.snippetBottomButtonIcon} name="save" />
            <DevText style={styles.snippetBottomButtonTextRight}>Save Snippet</DevText></Pressable>

        </View>
      </View>

    </KeyboardAwareScrollView>
  )
}


export default Create_Snippet_Screen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: DevColors.background,
  },
  topContainer: {
    marginTop: "3%",
    padding: "3%",

  },
  topTitle: {
    fontSize: 24,
    marginLeft: "-3%",
  },
  topTitleIconContainer: {
    marginTop: 6,
    flexDirection: 'row',
  },
  topTitleIcon: {
    fontSize: 21,
    color: DevColors.primaryContainer,
    marginTop: "2%",
    marginRight: "1%",
  },

  topTitleSub: {
    fontSize: 15,
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
    marginTop:"03%",
  },

  tagChip: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagChipSub: {
    flexDirection: "row",
    backgroundColor: DevColors.secondaryContainer + 20,
    borderColor: DevColors.secondaryContainer + 30,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: "0.1%",
    padding: 6,
    borderRadius: 21,
    marginLeft: 12,
    marginTop: "0.3%",

  },
  tagChipIcon: {
    marginLeft: 6,
    marginTop: 3,
  },
  centerSnippetSubtext: {
    fontSize: 12,
  },
  rightSnippetContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  showSnippetMain: {
    width: "100%",
    padding: "6%",
    borderRadius: 3,
    marginTop: "3%",
    flexDirection: "row",
    borderRightColor: DevColors.surfaceContainer,
    justifyContent: 'space-between',
  },
  showSnippetMainDropdown: {
    width: "100%",
    paddingLeft: "3%",
    borderRadius: 3,
    marginTop: "3%",
    flexDirection: "row",
    borderRightColor: DevColors.surfaceContainer,
    justifyContent: 'space-between',
  },
  snippetBottomButtonContainerMain: {
    width: "95%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "3%",
    marginRight: "3%",
  },


  snippetBottomButtonLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    padding: 12,
    borderRadius: 3,
  },
  snippetBottomButtonRight: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: DevColors.primaryContainer,
    padding: 12,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: DevColors.primaryContainer,
  },
  snippetBottomButtonIcon: {
    color: DevColors.onPrimary,
    marginRight: 9,
    fontSize: 15,

  },
  snippetBottomButtonTextLeft: {
    color: DevColors.onSurfaceVariant,
    marginRight: 0,
    fontSize: 15,

  },
  snippetBottomButtonTextRight: {
    color: DevColors.onPrimary,
    marginRight: 9,
    fontSize: 15,

  },

  showSnippetsDropdown: {
    width: "100%",
    backgroundColor: DevColors.surfaceContainer,
    borderColor: DevColors.outlineVariant,
    borderWidth: 2,

  },

  snippetCode: {
    marginLeft: "-3%",
    marginTop: "4%",
    fontSize: 21,
    fontWeight: 800,
    color: DevColors.outline,
    marginRight: "3%",

  },

  snippetTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 600,
    marginRight: "9%",
    marginTop: "1%",
    textAlign: "left",
    color: DevColors.outlineVariant,
  },

  snippetBottomContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "3%",

  },

  snippetContainerHead: {
    flexDirection: "row",
    width:"100%",
    backgroundColor: DevColors.surfaceContainerHigh,
    borderRadius:3,
    // overflow:"hidden",
  },
  snippetContainerHeadLeft: {
    flexDirection: 'row',
    width: "20%",
    gap: 6,
    padding:"3%",
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
    padding:"3%",
    
  },
  snippetContainerCenterText: {
    textAlign: "center",
  },
  snippetContainerHeadRight: {
    // backgroundColor: DevColors.surfaceContainerHigh,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "20%",
    padding:"3%",
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
    marginTop:"5%",
  },
  lineNumber: {
    fontSize: 15,
    color: DevColors.outlineVariant,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: DevColors.outlineVariant,
  },
  snippetMainContainerCodeRight:{
    width:"90%",
    paddingLeft:"3%",
  }, 
})

