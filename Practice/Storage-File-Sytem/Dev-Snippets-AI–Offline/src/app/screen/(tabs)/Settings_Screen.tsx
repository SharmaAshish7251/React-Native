import { FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DevColors from '../utils/DevColors';
import DevText from '../utils/DevText';
import DevHeading from '../utils/DevTitle';
import DropDownPicker from 'react-native-dropdown-picker';





const Settings_Screen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [openmodel, setOpenmodel] = useState(false);
  const [valuemodel, setValuemodel] = useState(null);
  const [customtheme, setCustomTheme] = useState<any>(
    [
      { value: 0, label: "Green " },
      { value: 1, label: "Blue" },
      { value: 2, label: "Choco " },
      { value: 3, label: "Matrix " },
      { value: 4, label: "Pookie" },
      { value: 5, label: "Orange" },
    ]

  )

  const [aimodel, setAimodel] = useState<any>([
    { value: 0, label: "Gemini" },
    { value: 1, label: "ChatGpt" },
    { value: 2, label: "Claude" },
    { value: 3, label: "Deepseek" },

  ])

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraHeight={120}
      style={styles.mainContainer}
    >
      {/* Top Conatiner */}
      <View style={styles.topContainer}>
        <DevHeading style={styles.topTitle}> Configuration</DevHeading>
        <DevText numberOfLines={2} style={styles.topTitleSub}>Manage your development environment and
          sync preferences.</DevText>
      </View>

      {/* User Details */}
      <View style={styles.userContainerMain}>
        {/* left Profile*/}
        <View style={styles.userProfileContainer}>
          <FontAwesome6 style={styles.userProfileEditIcon} name="edit" />
        </View>

        {/* user details */}
        <View style={styles.userDetailsContainer}>
          <DevHeading style={styles.userName}>Ashish Sharma</DevHeading>
          <DevText style={styles.userEmail}>info@ashishsharma.in</DevText>
          <DevText style={styles.userStatus}>ADMIN</DevText>
        </View>

        {/* Logout */}
        <View style={styles.userRightContainer}>
          <DevText style={styles.userLogout}>LOGOUT</DevText>
        </View>
      </View>


      {/* Customize Options */}
      <View style={styles.customizeDetailContainer}>
        {/* Header */}
        <View style={styles.customizeDetailHeader} >
          <FontAwesome6 style={styles.customizeDetailHeaderIcon} name="palette" />
          <DevText>APPEARANCE</DevText>
        </View>


        {/* Color Theme */}
        <View style={styles.colorThemeMainContainer}>


          {/* Top Section */}

          <View style={styles.colorThemeContainerTop}>
            {/* Left */}
            <View style={styles.colorThemeContainerLeft}>
              <DevHeading>Color Theme</DevHeading>
              <DevText style={styles.colorThemeSubtext}>Select your preferred
                interface style</DevText>
            </View>

            {/* Right */}
            <View style={styles.colorThemeContainerRight}>
              <View style={styles.themeContainer}>
                <Pressable
                  onPress={() => setTheme("dark")}
                  style={[
                    styles.themeButton,
                    theme === "dark" && styles.activeTheme,
                  ]}
                >
                  <FontAwesome6
                    name="moon"
                    size={11}
                    color={theme === "dark" ? DevColors.primaryContainer : DevColors.outline}
                  />
                  <DevText
                    style={[
                      styles.themeText,
                      theme === "dark" && styles.activeThemeText,
                    ]}
                  >
                    Dark
                  </DevText>
                </Pressable>

                <Pressable
                  onPress={() => setTheme("light")}
                  style={[
                    styles.themeButton,
                    theme === "light" && styles.activeTheme,
                  ]}
                >
                  <FontAwesome6
                    name="sun"
                    size={11}
                    color={theme === "light" ? DevColors.tertiaryContainer : DevColors.outline}
                  />
                  <DevText
                    style={[
                      styles.themeText,
                      theme === "light" && styles.activeThemeText,
                    ]}
                  >
                    Light
                  </DevText>
                </Pressable>
              </View>
            </View>
          </View>


          {/* Bottom */}
          <View style={styles.colorThemeContainerBottom}>
            {/* Left */}
            <View style={styles.colorThemeContainerLeft}>
              <DevHeading>Syntax Highlighting</DevHeading>
              <DevText style={styles.colorThemeSubtext}>Current: Monokai Pro Obsidian</DevText>
            </View>


            {/* Right */}
            <View style={styles.colorThemeContainerRight}>
              <View style={styles.themeContainer}>
                <DropDownPicker
                  containerStyle={{
                    width: "100%",
                  }}
                  listMode="SCROLLVIEW"
                  style={styles.showSnippetsDropdown}
                  // searchable={true}
                  theme="DARK"
                  open={open}
                  value={value}
                  items={customtheme}
                  setItems={setCustomTheme}
                  setOpen={setOpen}
                  setValue={setValue}
                  showArrowIcon={true}
                  placeholder={'Choose'}
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
          </View>
        </View>
      </View>

      {/* AI Model Options */}
      <View style={styles.customizeDetailContainer}>
        {/* Header */}
        <View style={styles.customizeDetailHeader} >
          <FontAwesome6 style={styles.customizeDetailHeaderIcon} name="wand-magic-sparkles" />
          <DevText>AI INTELLIGENCE</DevText>
        </View>


        {/* Color Theme */}
        <View style={styles.colorThemeMainContainer}>


          {/* Top Section */}

          <View style={styles.colorThemeContainerTop}>
            {/* Left */}
            <View style={styles.colorThemeContainerLeft}>
              <DevHeading>Primary AI Model</DevHeading>
              <DevText style={styles.colorThemeSubtext}>Engine for code optimization and
                comments</DevText>
            </View>

            {/* Right */}
            <View style={styles.colorThemeContainerRight}>
              <View style={styles.themeContainer}>
                <DropDownPicker
                  containerStyle={{
                    width: "100%",
                  }}
                  listMode="SCROLLVIEW"
                  style={styles.showSnippetsDropdown}
                  // searchable={true}
                  theme="DARK"
                  open={openmodel}
                  value={valuemodel}
                  items={aimodel}
                  setItems={setAimodel}
                  setOpen={setOpenmodel}
                  setValue={setValuemodel}
                  showArrowIcon={true}
                  placeholder={'Choose'}
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
          </View>


          {/* Bottom */}
          <View style={styles.colorThemeContainerBottom}>
            {/* Left */}
            <View style={styles.colorThemeContainerLeft}>
              <DevHeading>Syntax Highlighting</DevHeading>
              <DevText style={styles.colorThemeSubtext}>Current: Monokai Pro Obsidian</DevText>
            </View>


            {/* Right */}
            <View style={styles.colorThemeContainerRight}>
              <View style={styles.themeContainer}>
                <DropDownPicker
                  containerStyle={{
                    width: "100%",
                  }}
                  listMode="SCROLLVIEW"
                  style={styles.showSnippetsDropdown}
                  // searchable={true}
                  theme="DARK"
                  open={open}
                  value={value}
                  items={customtheme}
                  setItems={setCustomTheme}
                  setOpen={setOpen}
                  setValue={setValue}
                  showArrowIcon={true}
                  placeholder={'Choose'}
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
          </View>
        </View>
      </View>


    </KeyboardAwareScrollView>
  )
}


export default Settings_Screen;

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
    flex: 1,
    fontSize: 24,
    marginLeft: "-8%",
  },

  topTitleSub: {
    fontSize: 15,
    marginLeft: "-3%",
  },
  userContainerMain: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: DevColors.onContainerinverse,
    padding: "3%",
    borderRadius: 9,
    width: "100%",
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
  },
  userProfileContainer: {
    width: "20%",
    height: "100%",
    backgroundColor: DevColors.inversePrimary,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: DevColors.primaryContainer,
  },
  userProfileEditIcon: {
    position: "absolute",
    right: -1,
    bottom: -1,
    color: DevColors.background,
    fontSize: 12,
    backgroundColor: DevColors.primaryContainer,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  userDetailsContainer: {
    width: "60%",
    paddingLeft: "3%",
  },
  userName: {
    fontSize: 20,
    color: DevColors.onSurface,
  },
  userEmail: {
    fontSize: 11,
    color: DevColors.onSurfaceVariant,
  },
  userStatus: {
    marginTop: "3%",
    width: "30%",
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: DevColors.primaryContainer,
    color: DevColors.primaryContainer,
    fontSize: 10,
  },
  userRightContainer: {
    width: "20%",
    backgroundColor: DevColors.primaryContainer,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    transform: [{ translateX: 11 }],
  },
  userLogout: {
    marginTop: "15%",
    color: DevColors.background,
    borderColor: DevColors.outline,
    transform: [{ rotate: "-90deg" }],
  },
  customizeDetailContainer: {
    backgroundColor: DevColors.onContainerinverse,
    marginTop: "6%",
    borderRadius: 9,

  },
  customizeDetailHeader: {
    backgroundColor: DevColors.surfaceContainerHigh,
    flexDirection: "row",
    borderTopEndRadius: 6,
    borderTopLeftRadius: 6,
    padding: "3%",

  },
  customizeDetailHeaderIcon: {
    fontSize: 18,
    marginRight: "2%",
    color: DevColors.onSurfaceVariant,
  },
  colorThemeMainContainer: {
    width: "100%",
    flexDirection: "column",
    // backgroundColor: "red",
    padding: "3%",

  },

  colorThemeContainerTop: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  colorThemeContainerLeft: {
    width: "50%",
  },
  colorThemeSubtext: {
    fontSize: 12,
  },
  colorThemeContainerRight: {
    flex: 1,
    width: "50%",
    // backgroundColor: "red",
  },
  themeContainer: {

    flexDirection: "row",
    padding: 6,
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    borderRadius: 8,
    backgroundColor: DevColors.background,
    alignSelf: "flex-start",
  },

  themeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 6,
  },

  activeTheme: {
    backgroundColor: "#2B2D31",
  },

  themeText: {
    marginLeft: 8,
    color: DevColors.onSurfaceVariant,
    fontWeight: "600",
  },

  activeThemeText: {
    color: DevColors.onSurface,
  },
  colorThemeContainerBottom: {
    marginTop: "6%",
    borderTopWidth: 1,
    borderColor: DevColors.outline,
    paddingTop: "3%",
    flexDirection: "row",
  },
  showSnippetsDropdown: {
    width: "100%",
    backgroundColor: DevColors.surfaceContainer,
    borderColor: DevColors.outlineVariant,
    borderWidth: 2,

  },


})

