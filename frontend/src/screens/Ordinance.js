// frontend/src/screens/Ordinance.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: WINDOW_W } = Dimensions.get("window");
const CARD_W = Math.min(320, WINDOW_W - 40);

const rows = [
  { title: "Electrical Vehicle Registration Ordinance in the City Of Binan", section: "Section 1" },
  { title: "Purpose and Scope", section: "Section 2" },
  { title: "Definition of Terms", section: "Section 3/4" },
  { title: "Requirement for Registration of Electric Vehicles", section: "Section 5" },
  { title: "Imposition of Fee", section: "Section 6" },
  { title: "Penalty", section: "Section 9" },
  { title: "Appropriation", section: "Section 10" },
  { title: "Repealing Clause", section: "Section 12" },
  { title: "Effectivity Clause", section: "Section 13" },
  // add more rows as needed
];

export default function Ordinance() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* faint large seal bg */}
      <Image
        source={require("../../assets/binan-seal-large.png")} // <-- replace with your large seal asset
        style={styles.bgSeal}
        resizeMode="cover"
      />

      {/* Header area */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>find about the{'\n'}City Ordinance!</Text>

        {/* small emblem top-right (optional) */}
        <Image
          source={require("../../assets/top-emblem.png")} // <-- replace with your top emblem asset
          style={styles.topEmblem}
          resizeMode="contain"
        />
      </View>

      {/* Search bar */}
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#fff"
            style={styles.searchInput}
          />
          <Image
            source={require("../../assets/search-icon.png")} // <-- replace with search icon
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Scrollable list of ordinance cards */}
      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {rows.map((r, i) => (
          <TouchableOpacity key={i} style={styles.cardRow} activeOpacity={0.85}>
            {/* orange accent on left */}
            <View style={styles.leftAccent} />

            {/* card body */}
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {r.title}
              </Text>
            </View>

            {/* green pill/section */}
            <View style={styles.sectionPill}>
              <Text style={styles.sectionText}>{r.section}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* bottom spacing */}
        <View style={{ height: 36 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2e7d32", // green behind the header area
    alignItems: "center",
  },

  /* background seal (faint) */
  bgSeal: {
    position: "absolute",
    top: -30,
    left: -20,
    width: 420,
    height: 420,
    opacity: 0.14,
  },

  /* Header */
  header: {
    width: "100%",
    paddingTop: 18,
    paddingBottom: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Freeman",
    fontWeight: "700",
    lineHeight: 34,
  },
  topEmblem: {
    position: "absolute",
    right: 18,
    top: 8,
    width: 60,
    height: 60,
  },

  /* Search */
  searchWrap: {
    width: "100%",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 12,
  },
  searchBox: {
    width: CARD_W,
    height: 48,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d2d2d2",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: 16,
    position: "relative",
  },
  searchInput: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  searchIcon: {
    position: "absolute",
    right: 12,
    width: 20,
    height: 20,
    tintColor: "#fff",
  },

  /* list */
  listContainer: {
    paddingHorizontal: 0,
    alignItems: "center",
    paddingBottom: 80,
  },

  cardRow: {
    width: CARD_W,
    height: 88,
    borderRadius: 14,
    backgroundColor: "#f0f0f0",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },

  leftAccent: {
    width: 12,
    height: "100%",
    backgroundColor: "#ee4700", // orange accent
  },

  cardBody: {
    flex: 1,
    paddingHorizontal: 14,
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    color: "#333",
    lineHeight: 20,
  },

  sectionPill: {
    position: "absolute",
    right: 12,
    top: 12,
    backgroundColor: "#0f3d12",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 11,
    fontFamily: "Karma-Bold",
    color: "#fff",
    fontWeight: "700",
  },
});


