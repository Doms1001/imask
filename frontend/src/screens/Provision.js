// frontend/src/screens/Provision.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Replace these with your actual images (or keep them out if you don't need)
const RIBBON_IMG = require("../../assets/ribbon.png"); // optional angled ribbon
const BACK_ICON = require("../../assets/back-circle.png"); // small back circle
const CARD_BG = null; // optional background image for card; keep null to use plain background

const Provision = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* card */}
        <View style={styles.cardWrapper}>
          {/* optional ribbon / back icon container */}
          <View style={styles.topLeftCluster}>
            <Pressable style={styles.backButton}>
              <Image source={BACK_ICON} style={styles.backIcon} resizeMode="contain" />
            </Pressable>
          </View>

          {/* card body */}
          <ImageBackground
            source={CARD_BG}
            style={styles.card}
            imageStyle={styles.cardImage}
          >
            {/* green header pill */}
            <View style={styles.headerPill}>
              <Text style={styles.headerText}>Administrative Provision</Text>
            </View>

            {/* content scroll area */}
            <ScrollView
              style={styles.scrollArea}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.paragraph}>
                <Text style={styles.letter}>a. </Text>
                <Text style={styles.bodyText}>
                  A metal plate and/or sticker shall be provided by the Binan Tricycle Franchising and Regulatory Board (BTFRB) to be paid at cost by the owner.
                </Text>
              </Text>

              <Text style={styles.paragraph}>
                <Text style={styles.letter}>b. </Text>
                <Text style={styles.bodyText}>
                  The Binan Tricycle Franchising and Regulatory Board (BTFRB) shall keep a Register of all the electric vehicles which shall include information such as: its make and brand, the name and address of the owner, and the number of the plate or sticker issued.
                </Text>
              </Text>

              <Text style={styles.paragraph}>
                <Text style={styles.letter}>c. </Text>
                <Text style={styles.bodyText}>
                  The Binan Tricycle Franchising and Regulatory Board (BTFRB), Public Order and Safety Office (POSO), and Philippine National Police - Binan shall be deputized and will have the authority to enforce the said ordinance and conduct operations relative to the registration of the above-mentioned vehicles.
                </Text>
              </Text>

              <Text style={styles.paragraph}>
                <Text style={styles.letter}>d. </Text>
                <Text style={styles.bodyText}>
                  An Electric Route (E-Route) or a Designated Road Lanes will be issued which also includes reminders of wearing appropriate protective gear and adherence to the maximum speed levels.
                </Text>
              </Text>

              <Text style={styles.paragraph}>
                <Text style={styles.letter}>e. </Text>
                <Text style={styles.bodyText}>
                  Fare Matrix will be imposed on those Electric Vehicles for Hire and/or used as passenger utility vehicles and will be regulated by the Binan Tricycle Franchising and Regulatory Board (BTFRB).
                </Text>
              </Text>

              <Text style={[styles.paragraph, styles.lastParagraph]}>
                <Text style={styles.letter}>f. </Text>
                <Text style={styles.bodyText}>
                  All electric vehicles shall only be allowed to use the outermost lane of major thoroughfares of the city and will only be limited to Barangay Roads to ensure a safe ride.
                </Text>
              </Text>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CARD_WIDTH = Math.min(360, SCREEN_WIDTH - 32); // keep mobile-friendly width

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2b2727",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    overflow: "hidden",
    height: 560,
  },
  topLeftCluster: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 5,
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 18,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e7d32",
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: "#fff",
  },
  card: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 14,
    paddingHorizontal: 12,
  },
  cardImage: {
    borderRadius: 14,
  },

  headerPill: {
    alignSelf: "center",
    marginTop: 6,
    marginBottom: 8,
    backgroundColor: "#2e7d32",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    minWidth: 220,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  scrollArea: {
    flex: 1,
    marginTop: 6,
  },
  scrollContent: {
    paddingBottom: 18,
    paddingHorizontal: 6,
  },

  paragraph: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  lastParagraph: {
    marginBottom: 0,
  },

  letter: {
    fontWeight: "700",
    fontSize: 15,
    marginRight: 6,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#222",
    flexShrink: 1,
  },
});

export default Provision;
