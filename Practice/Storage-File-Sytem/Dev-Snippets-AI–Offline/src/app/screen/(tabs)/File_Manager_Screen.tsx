import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DevColors from "../utils/DevColors";
import DevText from "../utils/DevText";
import DevHeading from "../utils/DevTitle";
import DevSnippets from "../utils/DevSnippets";

const ProgressBar = ({ progress }: { progress: number }) => (
  <View style={styles.progressBarContainer}>
    <View
      style={[
        styles.progressBarFill,
        { width: `${Math.min(Math.max(progress, 0), 1) * 100}%` },
      ]}
    />
  </View>
);

const File_Manager_Screen = () => {
  const recent10 = 10;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraHeight={120}
      style={styles.mainContainer}
    >
      {/* Top Conatiner */}
      <View style={styles.topContainer}>
        {/* Left */}
        <View style={styles.leftTopContainer}>
          <DevHeading style={styles.topTitle}> Explorer</DevHeading>
          <DevText numberOfLines={2} style={styles.topTitleSub}>
            /root/vault/snippets
          </DevText>
        </View>

        {/* Right */}
        <View style={styles.rightTopContainer}>
          <Pressable style={styles.rightTopButton}>
            <FontAwesome6
              style={styles.rightTopIcon}
              name="folder-plus"
              color={DevColors.surfaceContainer}
            />
            <DevText style={styles.rightTopText}>New Folder</DevText>
          </Pressable>
        </View>
      </View>

      {/* Folders List  */}
      <View style={styles.foldersListMainContainer}>
        {/* 1st Folder */}
        <View style={styles.foldersListContainer}>
          {/* Top Folder Info */}
          <View style={styles.foldersTopListInfoContainer}>
            <FontAwesome6
              style={styles.foldersTopListInfoIcon}
              name="folder-closed"
            />
            <DevText style={styles.foldersTopListInfoText}>24</DevText>
          </View>

          {/* Bottom Folder Info */}
          <View style={styles.foldersBottomListInfoContainer}>
            <DevText style={styles.foldersBottomListInfoTitle}>
              Work Projects
            </DevText>
            <DevText style={styles.foldersBottomListInfoText}>
              PRODUCTION
            </DevText>
          </View>
        </View>

        {/* 2nd Folder */}
        <View style={styles.foldersListContainer}>
          {/* Top Folder Info */}
          <View style={styles.foldersTopListInfoContainer}>
            <FontAwesome6
              style={styles.foldersTopListInfoIcon01}
              name="file-zipper"
            />
            <DevText style={styles.foldersTopListInfoText}>24</DevText>
          </View>

          {/* Bottom Folder Info */}
          <View style={styles.foldersBottomListInfoContainer}>
            <DevText style={styles.foldersBottomListInfoTitle}>Scripts</DevText>
            <DevText style={styles.foldersBottomListInfoText}>JS</DevText>
          </View>
        </View>
      </View>

      {/* Folders List  */}
      <View style={styles.foldersListMainContainer}>
        {/* 1st Folder */}
        <View style={styles.foldersListContainer}>
          {/* Top Folder Info */}
          <View style={styles.foldersTopListInfoContainer}>
            <FontAwesome6
              style={styles.foldersTopListInfoIcon02}
              name="folder-closed"
            />
            <DevText style={styles.foldersTopListInfoText}>24</DevText>
          </View>

          {/* Bottom Folder Info */}
          <View style={styles.foldersBottomListInfoContainer}>
            <DevText style={styles.foldersBottomListInfoTitle}>
              Library Components
            </DevText>
            <DevText style={styles.foldersBottomListInfoText}>
              PRODUCTION
            </DevText>
          </View>
        </View>

        {/* 2nd Folder */}
        <View style={styles.foldersListContainer01}>
          {/* Top Folder Info */}
          <View style={styles.foldersTopListInfoContainer}>
            <FontAwesome6
              style={styles.foldersTopListInfoIcon03}
              name="folder-open"
            />
            <DevText style={styles.foldersTopListInfoText}>24</DevText>
          </View>

          {/* Bottom Folder Info */}
          <View style={styles.foldersBottomListInfoContainer}>
            <DevText style={styles.foldersBottomListInfoTitle}>
              Work Projects
            </DevText>
            <DevText style={styles.foldersBottomListInfoText}>
              PRODUCTION
            </DevText>
          </View>
        </View>
      </View>

      {/* Recent Files */}
      <View style={styles.recentfilesListMainContainer}>
        <FlatList
          scrollEnabled={false}
          data={DevSnippets.slice(3, recent10)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.recentfilesListContainer}>
              {/* Left */}
              <View
                style={[
                  styles.recentfilesListContainerLeft,
                  {
                    backgroundColor: item.iconColor + 30,
                  },
                ]}
              >
                <FontAwesome6
                  style={styles.recentfilesListIcon}
                  name={item.icon}
                  color={item.iconColor}
                />
              </View>
              {/* Center */}
              <View style={styles.recentfilesListContainerCenter}>
                <DevHeading numberOfLines={1}>{item.title}</DevHeading>
                <DevText>{item.category}</DevText>
              </View>
              {/* Right */}
              <View style={styles.recentfilesListContainerRight}>
                <FontAwesome6
                  style={styles.recentfilesListRightIcon}
                  name="ellipsis-vertical"
                />
              </View>
            </View>
          )}
        />
      </View>

      {/* Storage */}
      <View style={styles.showStorageMainContainer}>
        <DevHeading>Storage Used</DevHeading>
        <ProgressBar progress={0.7} />
        <View style={styles.showStorageInfo}>
          <DevText>20 MB used</DevText>
          <DevText>100 MB Total</DevText>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default File_Manager_Screen;

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
    flexDirection: "row",
  },

  leftTopContainer: {
    width: "60%",
  },
  topTitle: {
    flex: 1,
    fontSize: 24,
    marginLeft: -25,
    color: DevColors.primaryContainer,
  },

  topTitleSub: {
    fontSize: 11,
    marginLeft: "-3%",
  },
  rightTopContainer: {
    flexDirection: "row",
    width: "40%",
  },
  rightTopButton: {
    backgroundColor: DevColors.primaryContainer,
    flexDirection: "row",
    borderRadius: 3,
    paddingHorizontal: 9,
    paddingVertical: 6,
    margin: 4,
    alignItems: "center",
  },
  rightTopIcon: {
    color: DevColors.onPrimaryFixed,
    marginRight: "6%",
    fontSize: 18,
  },
  rightTopText: {
    color: DevColors.onPrimaryFixed,
  },
  foldersListMainContainer: {
    width: "100%",
    marginTop: "3%",
    flexDirection: "row",
    gap: 6,
  },
  foldersListContainer: {
    width: "48%",
    backgroundColor: DevColors.onContainerinverse + 70,
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    padding: "3%",
    borderRadius: 4,
  },
  foldersListContainer01: {
    width: "48%",
    backgroundColor: DevColors.onContainerinverse + 70,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: DevColors.outlineVariant,
    padding: "3%",
    borderRadius: 4,
  },
  foldersTopListInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foldersTopListInfoIcon: {
    color: DevColors.primaryContainer,
    fontSize: 21,
  },
  foldersTopListInfoIcon01: {
    color: DevColors.secondaryContainer,
    fontSize: 21,
  },
  foldersTopListInfoIcon02: {
    color: DevColors.tertiaryFixedDim,
    fontSize: 21,
  },
  foldersTopListInfoIcon03: {
    color: DevColors.secondaryFixedDim,
    fontSize: 21,
  },
  foldersTopListInfoText: {
    color: DevColors.onSurfaceVariant,
    backgroundColor: DevColors.inverseOnSurface,
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 4,
    textAlign: "center",
  },
  foldersBottomListInfoContainer: {
    flexDirection: "column",
  },
  foldersBottomListInfoTitle: {
    marginTop: "21%",
    fontSize: 16,
  },
  foldersBottomListInfoText: {
    textTransform: "uppercase",
    color: DevColors.onSurfaceVariant,
    fontFamily: "roboto-slab",
    fontSize: 12,
  },
  recentfilesListMainContainer: {
    flexDirection: "column",
  },
  recentfilesListContainer: {
    width: "97.6%",
    marginTop: "2%",
    backgroundColor: DevColors.onContainerinverse + 70,
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    padding: "3%",
    borderRadius: 4,
    flexDirection: "row",
    overflow: "hidden",
    verticalAlign: "middle",
    alignItems: "center",
  },
  recentfilesListContainerLeft: {
    width: "12%",
    height: 35,
    padding: 4,
    borderRadius: 3,
    verticalAlign: "middle",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  recentfilesListIcon: {
    fontSize: 18,
  },
  recentfilesListContainerCenter: {
    width: "75%",
  },
  recentfilesListContainerRight: {
    width: "12%",
    justifyContent: "flex-end",
    marginLeft: 12,
  },
  recentfilesListRightIcon: {
    color: DevColors.inverseSurface,
  },
  showStorageMainContainer: {
    width: "97.6%",
    marginTop: "4%",
    backgroundColor: DevColors.onContainerinverse + 70,
    borderWidth: 1,
    borderColor: DevColors.outlineVariant,
    padding: "3%",
    borderRadius: 4,
    flexDirection: "column",
    marginBottom: "6%",
  },
  progressBarContainer: {
    marginTop:"3%",
    width: "100%",
    height: 10,
    borderRadius: 999,
    backgroundColor: DevColors.surfaceVariant,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: DevColors.primaryContainer,
  },
  showStorageInfo: {
    flex: 1,
    marginTop: "3%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
