import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import DevColors from '../utils/DevColors';
import DevSnippets from '../utils/DevSnippets';
import DevText from '../utils/DevText';
import DevHeading from '../utils/DevTitle';

const Favourites_Screen = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favourites, setFavourites] = useState(DevSnippets);
  console.log({ favourites });

  const filteredData = favourites.filter(item => {
    const favMatch = item.fav;
      const categoryMatch =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return favMatch && categoryMatch;
    });

    const changeFav = (id: any) => {
      setFavourites(prev =>
        prev.map(item =>
          item.id === id ? { ...item, fav: !item.fav } : item
        ));
    };



    return (
      <View style={styles.mainContainer}>
        {/* Top Conatiner */}
        <View style={styles.topContainer}>
          <DevHeading style={styles.topTitle}>Favourite Snippets</DevHeading>
          <DevText numberOfLines={2}>Managing Managing {filteredData.length} personal code blocks in your library.</DevText>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {["All", "React", "Python", "CSS"].map(category => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[styles.topFilter, {
                backgroundColor:
                  selectedCategory === category
                    ? DevColors.primaryContainer
                    : "transparent",
              }]}
            >
              <DevText style={styles.topFilterText}>{category}</DevText>
            </Pressable>
          ))}
        </View>

        {/* Filter */}
        <FlatList
          // data={DevSnippets.filter(item => item.fav === true)}
          data={filteredData}
          keyExtractor={(Snip) => Snip.id.toString()}
          renderItem={({ item: Snip }) => (
            <View style={styles.snippetMainContainer}>

              {/* Top Quick Info */}
              <View style={styles.snippetContainer}>
                {/* Left */}
                <View style={styles.leftSnippetIconContainer}>
                  <FontAwesome6 style={styles.leftSnippetIcon} name="react" color="white" />
                </View>
                {/* Center */}
                <View style={styles.centerSnippetContainer}>
                  <DevHeading numberOfLines={1}>{Snip.title}</DevHeading>
                  <DevText style={styles.centerSnippetSubtext}>//devSnippets/React</DevText>
                </View>

                {/* Right */}
                <View style={styles.rightSnippetContainer}>
                  <FontAwesome6 name="ellipsis-vertical" color="white" />
                </View>
              </View>


              {/* Show Code */}
              <View style={styles.showSnippetMain}>
                {Snip.content.split("\n").map((line, index) => (
                  <View key={index}
                    style={{ flexDirection: "row" }}
                  >
                    <DevText style={styles.snippetLineNo}>{index + 1}</DevText>
                    <DevText style={styles.snippetCode}>{line}</DevText>
                  </View>

                ))}
              </View>

              {/* Bottom Quick Info */}
              <View style={styles.snippetBottomContainer}>
                {/* Left */}
                <View style={styles.snippetBottomLeft}>
                  {Snip.tags.map((tag) => (
                    <DevText style={styles.snippetBottomtags} key={tag}>{tag}</DevText>
                  ))}
                </View>

                {/* Right */}
                <View style={styles.snippetBottomRight}>
                  <Pressable
                    onPress={() => changeFav(Snip.id)}
                  >
                    <FontAwesome
                      name={Snip.fav ? "bookmark" : "bookmark-o"}
                      color="white"
                      size={16}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          )
          }
        >
        </FlatList >

      </View >
    )
  }


export default Favourites_Screen;

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingLeft: "3%",
      paddingRight: "3%",
      backgroundColor: DevColors.background,
    },
    topContainer: {
      backgroundColor: DevColors.surfaceContainerLow,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#3B4B3E",
      marginTop: "3%",
      padding: "3%",

    },
    topTitle: {
      fontSize: 24,
    },
    snippetMainContainer: {
      flexDirection: 'column',
      backgroundColor: DevColors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: DevColors.outlineVariant,
      borderRadius: 4,
      marginTop: "2%",
      padding: "3%",
      marginBottom: "6%",
    },
    snippetContainer: {
      backgroundColor: DevColors.surfaceContainerLow,
      borderRadius: 6,
      width: "100%",
      flexDirection: 'row',
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
    centerSnippetSubtext: {
      fontSize: 12,
    },
    rightSnippetContainer: {
      width: "10%",
      justifyContent: "center",
      alignItems: "center",
    },
    showSnippetMain: {
      backgroundColor: DevColors.surfaceContainerLowest,
      width: "100%",
      padding: "6%",
      borderRadius: 3,
      marginTop: "3%",
    },
    snippetCode: {
      marginLeft: 12,
    },
    snippetLineNo: {
      color: DevColors.outlineVariant,
    },
    snippetBottomContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      marginTop: "3%",

    },
    snippetBottomLeft: {
      flexDirection: "row",
      width: "90%",

    },
    snippetBottomtags: {
      borderWidth: 1,
      borderColor: DevColors.onSucess + "40",
      textTransform: "uppercase",
      padding: "3%",
      fontSize: 11,
      fontWeight: "600",
      marginRight: "3%",
      paddingTop: "1%",
      paddingBottom: "1%",
      paddingLeft: "2%",
      paddingRight: "2%",
      borderRadius: 3,
    },
    snippetBottomRight: {
      width: "10%",
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginRight: 34,
    },
    snippetBottomRightIcon: {
      fontSize: 15,
    },
    topFilter: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: DevColors.outlineVariant,
      marginRight: 10,
      // borderColor: DevColors.onSucess + "40",
    },
    topFilterText: {
      color: DevColors.onPrimaryContainer,

    },
  })

