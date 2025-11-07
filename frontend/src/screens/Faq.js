import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

// Replace with your actual header images if needed
const HEADER_TOP = require("../assets/header-top.png");
const HEADER_BOTTOM = require("../assets/header-bottom.png");
const LOGO = require("../assets/logo_small.png");

export default function Faq() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Green Header (top bar) */}
        <Image source={HEADER_TOP} style={styles.headerTop} resizeMode="stretch" />

        {/* Title "FAQ" */}
        <View style={styles.faqTitleWrapper}>
          <Text style={styles.faqTitle}>FAQ</Text>
        </View>

        {/* AIDE Logo */}
        <Image source={HEADER_BOTTOM} style={styles.headerBottom} resizeMode="stretch" />

        <View style={styles.aideWrapper}>
          <Text style={styles.aideText}>AIDE</Text>
          <Image source={LOGO} style={styles.logoSmall} resizeMode="contain" />
        </View>

        {/* SCROLLABLE CONTENT */}
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>
            FREQUENTLY ASKED QUESTIONS (FAQ)
            {"\n"}
            A.I.D.E. Biñan – AI Detection and Enforcement for Electric Bicycle
            Compliance{"\n"}
            {"\n"}
          </Text>

          {/* Q1 */}
          <Text style={styles.question}>
            1. What is A.I.D.E. Biñan?
          </Text>
          <Text style={styles.answer}>
            A.I.D.E. Biñan (AI Detection and Enforcement for Electric Bicycle
            Compliance) is a smart system designed to help the City of Biñan
            monitor and enforce e-bike regulations. It uses Artificial
            Intelligence and cameras to automatically detect e-bikes, recognize
            their plate numbers, and verify compliance.
            {"\n"}
          </Text>

          {/* Q2 */}
          <Text style={styles.question}>
            2. What is the main goal of the system?
          </Text>
          <Text style={styles.answer}>
            The goal of A.I.D.E. is to improve e-bike compliance, promote road
            safety, and support local enforcement officers. It replaces slow
            manual inspections with an automated, fast, and accurate AI-powered
            detection system.
            {"\n"}
          </Text>

          {/* Q3 */}
          <Text style={styles.question}>
            3. Who can benefit from A.I.D.E. Biñan?
          </Text>
          <Text style={styles.answer}>The system benefits several groups:</Text>

          <UnorderedList style={styles.bulletList}>
            <ListItem>
              <Text style={styles.answer}>
                Government and regulatory agencies: Gain access to real-time
                compliance data.
              </Text>
            </ListItem>

            <ListItem>
              <Text style={styles.answer}>
                Traffic enforcement officers: Perform accurate inspections with
                less manual work.
              </Text>
            </ListItem>

            <ListItem>
              <Text style={styles.answer}>
                E-bike riders: Experience fair and consistent enforcement.
              </Text>
            </ListItem>

            <ListItem>
              <Text style={styles.answer}>
                The community: Enjoy safer, more organized roads.
              </Text>
            </ListItem>
          </UnorderedList>

          {"\n"}

          {/* Q4 */}
          <Text style={styles.question}>
            4. What are the limitations of the system?
          </Text>
          <Text style={styles.answer}>
            Accuracy may be affected by lighting, weather, or visibility. The
            system assists in detection and reporting but enforcement actions
            remain with human officers.
            {"\n"}
          </Text>

          {/* Q5 */}
          <Text style={styles.question}>
            5. How does A.I.D.E. Biñan ensure data privacy and fairness?
          </Text>
          <Text style={styles.answer}>
            The system only collects necessary information such as images,
            plate numbers, and model data. All data is securely stored and used
            only for lawful enforcement. AIDE supports human review of reports
            to prevent false or biased results.
          </Text>
        </ScrollView>

        {/* Green Bottom bar */}
        <Image source={HEADER_TOP} style={styles.bottomBar} resizeMode="stretch" />
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
    width: 360,
    flex: 1,
    backgroundColor: "#fefefe",
    overflow: "hidden",
  },

  /* TOP HEADER */
  headerTop: {
    width: 360,
    height: 85,
  },

  faqTitleWrapper: {
    position: "absolute",
    top: 100,
    left: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  headerBottom: {
    width: 360,
    height: 85,
    position: "absolute",
    top: 0,
  },

  aideWrapper: {
    position: "absolute",
    top: 35,
    left: 130,
    flexDirection: "row",
    alignItems: "center",
  },
  aideText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginRight: 6,
  },
  logoSmall: {
    width: 28,
    height: 28,
  },

  /* CONTENT */
  scrollArea: {
    marginTop: 140,
    paddingHorizontal: 22,
  },

  heading: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    lineHeight: 20,
  },

  question: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },

  answer: {
    fontSize: 13,
    color: "#222",
    lineHeight: 20,
    marginBottom: 10,
  },

  bulletList: {
    paddingLeft: 6,
  },

  bottomBar: {
    width: 360,
    height: 66,
    position: "absolute",
    bottom: 0,
  },
});
