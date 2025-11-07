import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PAGE_WIDTH = Math.min(360, SCREEN_WIDTH);
const HEADER_HEIGHT = 78;

// Replace with your assets
const CITY_SEAL = require("../../assets/city_seal.png"); // optional crest
const LOGO_SMALL = require("../../assets/logo_small.png"); // optional tiny logo

export default function ContactUs() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Green header */}
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            {/* optional crest - remove if not needed */}
            <Image source={CITY_SEAL} style={styles.citySeal} resizeMode="contain" />
            <View style={styles.aideWrap}>
              <Text style={styles.aideTitle}>AIDE</Text>
              <Image source={LOGO_SMALL} style={styles.logoSmall} resizeMode="contain" />
            </View>
          </View>
        </View>

        {/* Page title */}
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Contact Us</Text>
        </View>

        {/* Scrollable body */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.h1}>
            A.I.D.E. Biñan – AI Detection and Enforcement for Electric Bicycle Compliance
          </Text>

          <Text style={styles.paragraph}>
            If you have any questions, feedback, or concerns about the A.I.D.E. Biñan system,
            please reach out to us through the contact details below. Our team values your inquiries
            and will respond as soon as possible.
          </Text>

          <Text style={styles.sectionTitle}>Project Development Team</Text>
          <Text style={styles.paragraph}>
            A.I.D.E. Biñan Developers{"\n"}
            College of Information Technology and Engineering{"\n"}
            Polytechnic University of the Philippines – Biñan Campus{"\n"}
            Biñan City, Laguna, Philippines
          </Text>

          <Text style={styles.sectionTitle}>For General Inquiries</Text>
          <Text style={styles.paragraph}>
            📧 Email: aidebinan.team@gmail.com{"\n"}
            📞 Phone: (optional if available)
          </Text>

          <Text style={styles.sectionTitle}>Office Hours</Text>
          <Text style={styles.paragraph}>
            Monday to Friday — 8:00 AM to 5:00 PM{"\n"}Closed on weekends and public holidays
          </Text>

          <Text style={styles.sectionTitle}>Purpose of Contact</Text>

          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Report system errors or technical issues</Text>
            <Text style={styles.bulletItem}>• Request information about the project</Text>
            <Text style={styles.bulletItem}>• Provide feedback or suggestions</Text>
            <Text style={styles.bulletItem}>• Coordinate with local authorities for system use</Text>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* bottom green footer bar like screenshot */}
        <View style={styles.footerSpace} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2b2727", // dark outer frame like your screenshots
    alignItems: "center",
  },
  container: {
    width: PAGE_WIDTH,
    flex: 1,
    backgroundColor: "#fefefe",
  },

  /* header */
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#2e7d32",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  citySeal: {
    width: 96,
    height: 96,
    marginTop: 6,
    borderRadius: 48,
  },
  aideWrap: {
    position: "absolute",
    top: 34,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  aideTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginRight: 6,
  },
  logoSmall: {
    width: 28,
    height: 28,
  },

  /* title */
  titleRow: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  pageTitle: {
    fontSize: 20,
    color: "#333",
    fontWeight: "700",
  },

  /* content */
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 40,
  },

  h1: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    lineHeight: 20,
  },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },

  paragraph: {
    fontSize: 13,
    color: "#222",
    lineHeight: 20,
    marginBottom: 10,
  },

  bulletList: {
    paddingLeft: 6,
    marginTop: 6,
  },
  bulletItem: {
    fontSize: 13,
    color: "#222",
    lineHeight: 22,
    marginBottom: 6,
  },

  footerSpace: {
    height: 66,
    backgroundColor: "#2e7d32",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 8,
  },
});
