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

// replace with your assets if available
const CITY_SEAL = require("../../assets/city_seal.png"); // circular crest (optional)
const LOGO = require("../../assets/logo_small.png"); // small AIDE logo (optional)

export default function About() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* top green header */}
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            {/* optional circular seal */}
            <Image source={CITY_SEAL} style={styles.citySeal} resizeMode="contain" />
            {/* AIDE Title */}
            <View style={styles.aideWrap}>
              <Text style={styles.aideTitle}>AIDE</Text>
              {/* small transparent logo next to AIDE (optional) */}
              <Image source={LOGO} style={styles.logoSmall} resizeMode="contain" />
            </View>
          </View>
        </View>

        {/* page title */}
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>About</Text>
        </View>

        {/* body (scrollable) */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.h1}>
            A.I.D.E. Biñan – AI Detection and Enforcement for Electric Bicycle Compliance
          </Text>

          <View style={{ height: 12 }} />

          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.paragraph}>
            A.I.D.E. Biñan is an innovative system designed to assist the City of Biñan in regulating
            and monitoring electric bicycles through Artificial Intelligence (AI). It automatically
            detects e-bikes, identifies their features such as plate numbers and model, and verifies
            their registration status in real time. The system helps authorities promote road safety,
            improve compliance, and ensure that all riders follow local traffic regulations.
          </Text>

          <Text style={styles.sectionTitle}>Purpose</Text>
          <Text style={styles.paragraph}>
            The main purpose of A.I.D.E. Biñan is to enhance enforcement efficiency and road safety
            by replacing slow manual inspections with a fast, accurate, and automated detection
            process. Through this system, local enforcement officers can focus on decision-making and
            accountability while the AI handles detection and verification tasks.
          </Text>

          <Text style={styles.sectionTitle}>Mission</Text>
          <Text style={styles.paragraph}>
            To support Biñan City in building a safer, smarter, and more organized traffic environment
            through the use of modern AI technology and data-driven enforcement.
          </Text>

          <Text style={styles.sectionTitle}>Vision</Text>
          <Text style={styles.paragraph}>
            A future where technology and governance work together to maintain order, promote compliance,
            and protect the welfare of all road users in Biñan City.
          </Text>

          <Text style={styles.sectionTitle}>Developed By</Text>
          <Text style={styles.paragraph}>
            A.I.D.E. Biñan is developed by students from the Polytechnic University of the Philippines – Biñan Campus,
            College of Information Technology and Engineering, as part of their capstone project for the Bachelor of Science
            in Information Technology program.
          </Text>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* bottom rounded green footer bar */}
        <View style={styles.footerSpace} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2b2727",
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
    left: 0,
    right: 0,
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

  /* page title */
  titleRow: {
    paddingHorizontal: 24,
    paddingTop: 18,
  },
  pageTitle: {
    fontSize: 20,
    color: "#333",
    fontWeight: "700",
  },

  /* body */
  scrollContent: {
    paddingHorizontal: 26,
    paddingTop: 12,
    paddingBottom: 40,
  },

  h1: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    lineHeight: 22,
  },

  sectionTitle: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  paragraph: {
    fontSize: 14,
    color: "#222",
    lineHeight: 20,
    marginBottom: 12,
  },

  footerSpace: {
    height: 66,
    backgroundColor: "#2e7d32",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 8,
  },
});
